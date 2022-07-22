const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removepanelactive()
        panel.classList.toggle('active')
    })
})

function removepanelactive() {
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}
