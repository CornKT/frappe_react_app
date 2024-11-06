// apps/myapp/myapp/doctype/live_room/live_room.js

frappe.listview_settings["test doctype"] = {
    hide_name_column: true,
    add_fields: ["reference_type", "reference_name"],

    button: {
        show: function (doc) {
            return doc.reference_name;
        },
        get_label: function () {
            return __("Open", null, "Access");
        },
        get_description: function (doc) {
            return __("Open {0}", [`${__(doc.reference_type)}: ${doc.reference_name}`]);
        },
        action: function (doc) {
            let url = `https://fb.com`;
            window.location.href = url;
        }
    },
    dropdown_button: {
        get_label: __("Action"),
        buttons: [
            {
                get_label: __("Join"),
                show: function(doc) {
                    return true;
                },
                get_description: function(doc) {
                    return "Open Button 1 " + doc.reference_name;
                },
                action: function(doc) {
                    // Tạo và hiển thị modal khi click vào "Join"
                    showReactModal();
                }
            },
            {
                get_label: __("Button 2"),
                show: function (doc) {
                    return doc.status != "Closed";
                },
                get_description: function(doc) {
                    return "Open Button 2 " + doc.reference_name;
                },
                action: function(doc) {
                    frappe.msgprint("Dropdown Button 2 Clicked " + doc.reference_name);
                }
            },
            {
                get_label: __("Button 3"),
                show: function (doc) {
                    return doc.status != "Cancelled";
                },
                get_description: function(doc) {
                    return "Open Button 3 " + doc.reference_name;
                },
                action: function(doc) {
                    frappe.msgprint("Dropdown Button 3 Clicked " + doc.reference_name);
                }
            }
        ]
    }
};

// Hàm tạo và hiển thị modal có chứa React component
function showReactModal() {
    let reactDialog = new frappe.ui.Dialog({
        title: 'React in Modal',
        fields: [
            {
                fieldname: 'react_container',
                fieldtype: 'HTML'
            }
        ]
    });

    reactDialog.show();
    
    const container = reactDialog.fields_dict.react_container.$wrapper[0];
    
    // Đảm bảo rằng `myapp.bundle.js` đã được load trước
    frappe.require('reactapp.bundle.js').then(() => {
        window.reactapp.hello(container);
    });
}
