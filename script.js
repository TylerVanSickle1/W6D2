let boxes = 16;
container = $('#container');

for (let i = 0; i < boxes; i++) {
    container.append('<div class="box"></div>');
}

$('#container').on('click', '.box', function() {
    let box = $(this);
    box.toggleClass('lighter');
});

