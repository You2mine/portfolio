window.onload = function() {
    const container = document.getElementById('grid-container');
    const wavePath = document.getElementById('wave-path');
    const synth = new Tone.Synth().toDestination();

    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        const note = notes[i % notes.length];
        div.addEventListener('click', function() {
  
            synth.triggerAttackRelease(note, "8n");


            const noteNumber = Tone.Frequency(note).toMidi();
            wavePath.setAttribute('d', generateWavePath(noteNumber));
        });

        container.appendChild(div);
    }

    function generateWavePath(noteNumber) {

        const start = noteNumber;
        const mid = start + Math.random() * 50 - 25;
        const end = mid + Math.random() * 50 - 25;
        return `M0,224L60,${start}C120,${mid},240,${end},360,${end}C480,${end},600,${mid},720,${start}C840,${start},960,${mid},1080,${end}C1200,${end},1320,${mid},1380,${start}L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z`;
    }
}
