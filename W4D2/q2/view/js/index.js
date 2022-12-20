$(() => {

    //button click
    function btnClickHandler(e){
        $.get('/8ball')
            .done(resultCallback);
    }

    //triggers when a key is pressed while being on focus to input box
    function keyPressHandler(e){
        //if enter
        if(e.key === "Enter"){
            $.get('/8ball')
                .done(resultCallback);
        }
    }

    //when input gets focus then select all text in the input
    function focusHandler(e){
        this.select();
    }

    function resultCallback(result){
        $('#input1').val(result);
        $('#input1').trigger('focus');
    }

    //event handlers for input
    $('#input1')
        .on('keypress', keyPressHandler) //keypress() event
        .on('focus', focusHandler); //.focus() event

    //event handler for button
    $('#btn1').on('click', btnClickHandler); //onClick event
});
