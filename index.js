const qr = document.getElementById('qrcode');
const form = document.getElementById('qr-form');
const spinner = document.getElementById('spinner')

const onGenerateSubmit = (e) =>{
    e.preventDefault();
    clearUi();
    const url = document.getElementById('url').value;
    const qrSize = document.getElementById('size').value;
    if(url ===""){
        alert('please enter url')
    }else{
     showSpinner();
     setTimeout(()=>{
        hideSpinner();
        qrCodeGenerate(url, qrSize);
        setTimeout(() =>{
            const saveUrl = qr.querySelector('img').src;
            generateSaveBtn(saveUrl)
        },100)
     },1000)
    }
}
// Generate QR code

const qrCodeGenerate = (url, size)=>{
const qrCode = new QRCode("qrcode",{
    text : url,
    width: size,
    height: size,
})
}
const showSpinner= ()=>{
spinner.style.display = "block";
}
const hideSpinner =()=>{
    spinner.style.display ="none";
}
const clearUi = () =>{
    qr.innerHTML = "";
    const saveButtonRemove= document.getElementById('save-qr');
    if(saveButtonRemove) saveButtonRemove.remove();
}
const generateSaveBtn = (saveUrl) =>{
const link = document.createElement('a');
link.id = 'save-qr';
link.classList = 'save-qr-image';
link.href = saveUrl;
link.innerText= 'Save QR '
link.download = 'qrCode';
// document.getElementById('generate').appendChild(link);
   document.getElementById('generate').appendChild(link);

}
hideSpinner();
form.addEventListener('submit', onGenerateSubmit);
