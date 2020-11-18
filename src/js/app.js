import '../css/elements.css';
import '../css/main.css';
import { secretButton,secretParagraph} from './dom-loader'

var showSecret = false;
updateSecretParagraph();
secretButton.addEventListener('click', toggleSecretState);
 

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide';
    } else {
        secretButton.textContent = 'Show';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}