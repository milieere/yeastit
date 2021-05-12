const countIt = function() {
    
    let ODinit = document.getElementById("ODinit");
    let ODfinal = document.getElementById("ODfinal");
    let dT = document.getElementById("dT");
    let growthTime = document.getElementById("growthTime");
    let finalVolume = document.getElementById("finalVolume");
    let result = document.getElementById("result");

    let resultSentence = document.querySelector('.resultSentence');
    let errorText = document.querySelector('.errorText');
    let resultTitle = document.querySelector('.resultTitle');
    let subtitle = document.querySelector('.subtitle');


    //////// result Sentence variables

    let ODtext = document.getElementById("ODText");
    let ODNewText = document.getElementById("ODNewText");
    let volumeNewText = document.getElementById("volumeNewText");
    let timeText = document.getElementById("timeNew");
    let volumeText = document.getElementById("volumeText");

    const twoDecimals = function(n) {
        var log10 = n ? Math.floor(Math.log10(n)) : 0,
            div = log10 < 0 ? Math.pow(10, 1 - log10) : 100;
        return Math.round(n * div) / div;
    }
    
    // Delete the previous result
    if (resultSentence.style.display = 'block'){
        resultSentence.style.display = 'none';
    }

    if (ODinit.value == '' || finalVolume.value == '' || ODfinal.value == '' || growthTime.value == '' || dT.value == ''){

        if(result.style.display = 'block'){
            result.style.display = 'none';
        }

        var error = document.createTextNode('Seems like something is missing!');
        resultTitle.style.display = 'none';

        setTimeout(function(){
            errorText.appendChild(error);
            subtitle.style.display = 'block';
        }, 10)

        errorText.style.display = 'block';
        setTimeout(function(){
            errorText.style.display = 'none';
            errorText.removeChild(error);
        }, 4000);


    } else {
        let volumeCalculated = (finalVolume.value * (ODfinal.value/ODinit.value)) / (2**(growthTime.value/dT.value));
        let volumeToPut = twoDecimals(volumeCalculated);

        console.log(volumeToPut);
        
        if(volumeToPut){
            subtitle.style.display = 'none';
            volumeText.textContent = volumeToPut*1000;
            timeText.textContent = growthTime.value;
            ODNewText.textContent = ODfinal.value;
            ODtext.textContent = ODinit.value;
            volumeNewText.textContent = finalVolume.value;
            resultTitle.style.display = 'block';
            resultSentence.style.display = 'block';

            result.textContent = volumeToPut*1000 + ' ul';
            result.style.display = 'block';
        }

    }
    volumeCalculated = 0;
}




//////////////////////////////////////////////////////////////////////

const submit = document.getElementById("submit");

submit.addEventListener('click', countIt);
