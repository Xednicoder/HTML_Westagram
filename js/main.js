const commitInput = document.querySelector('.writeCommitBox #commitText');
const commitButton = document.querySelector('.writeCommitBox #commitEnter');
commitInput.addEventListener('keydown', uploadCommit);
commitButton.addEventListener('click', uploadButton);

function uploadCommit(event) {
  if (event.keyCode === 13) {
    let divPosition = document.getElementsByClassName('commit')[0];
    let makeDiv = document.createElement('div');
    let makeWriter = document.createElement('span');
    let makeMsg = document.createElement('span');
    let makeDelbtn = document.createElement('button');

    makeDiv.className = 'commit1';
    makeWriter.className = 'visitor1 large-text';
    makeMsg.className = 'visitorCom body-text';
    makeDelbtn.className = 'deleteButton';

    makeMsg.innerHTML = commitText.value;
    makeWriter.innerHTML = 'Xedni&nbsp';
    makeDelbtn.innerHTML = '&nbspDelete';

    divPosition.appendChild(makeDiv);
    makeDiv.appendChild(makeWriter);
    makeDiv.appendChild(makeMsg);
    makeDiv.appendChild(makeDelbtn);

    const deleteButton = document.querySelector('.deleteButton');
    deleteButton.addEventListener('click', deleteComit);

    function deleteComit() {
      let target1 = document.querySelector('.deleteButton');
      let deleteDiv = target1.parentNode;
      divPosition.removeChild(deleteDiv);
    }
  }
}

function uploadButton() {
  let divPosition = document.getElementsByClassName('commit')[0];
  let makeDiv = document.createElement('div');
  let makeWriter = document.createElement('span');
  let makeMsg = document.createElement('span');
  let makeDelbtn = document.createElement('button');

  makeDiv.className = 'commit1';
  makeWriter.className = 'visitor1 large-text';
  makeMsg.className = 'visitorCom body-text';
  makeDelbtn.className = 'deleteButton2';

  makeMsg.innerHTML = commitText.value;
  makeWriter.innerHTML = 'Xedni&nbsp';
  makeDelbtn.innerHTML = '&nbspDelete';

  divPosition.appendChild(makeDiv);
  makeDiv.appendChild(makeWriter);
  makeDiv.appendChild(makeMsg);
  makeDiv.appendChild(makeDelbtn);
}
