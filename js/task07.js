const diskSpace = prompt('What is the disk space in Gb?')
const fileSize = 0.82;

const fileAmount = Math.trunc(diskSpace / fileSize);

alert('You can store ' + fileAmount + ' files of 820 Mb on this disk');