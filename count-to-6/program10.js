console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(el, ...replacement) {
    var result = el[0];
    for (var i = 0; i < replacement.length; ++i) {
        result += escape(replacement[i]) + el[i + 1];
    }

    return result;
}

function escape(input) {
    return input.replace(/'/g, "&apos;")
                .replace(/"/g, "&quot;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/&/g, "&amp;")
}
