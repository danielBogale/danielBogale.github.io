$(() => {

    let count = 0;

    function successCallback(result){
        $('#cpuSpeed').text(result.cpu);
        $('#ramAmount').text(result.ram);
        $('#storage').text(result.storage);
        $('#price').text(result.price);
    }

    function failCallback(){
    
    }

    // $('#button1').on('click', () => { callFunction(1); });
    // $('#button2').on('click', () => { callFunction(2); });
    // $('#button3').on('click', () => { callFunction(3); });

    // $('button').on('click', (e) =>{
    //     console.log(e.target, this, $(this));
    // });

    $('button').on('click', function(e){
        $.get('/computers', {id: $(this).text()})
            .done(successCallback)
            .fail(failCallback);
    }); 

    //table
    $('table').on('click', function(e){
        console.log(e.target,this);
        let value = 'O';
        if(count % 2 === 0)
            value = 'X';

        $(e.target).text(value);
        //$(e.target).html('<p>hello</p>');

        count++;

    })
});
