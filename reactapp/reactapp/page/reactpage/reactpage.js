frappe.pages['reactpage'].on_page_load = function(wrapper) {
    var parent = $('<div class="container"></div>').appendTo(wrapper);
    frappe.require('reactapp.bundle.js').then(() => {
        window.reactapp.hello(parent[0])
    })
}