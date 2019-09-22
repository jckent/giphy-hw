$("#cat-button").on("click", function() {

    
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=e1ttU1xxNWt55EDORMLU1Ddf6ve7hTA9";
    var marvel = ["Captain America", "Thor", "The Hulk", "Black Widow", "Captain Marvel"];
    let hero;

      
      function renderButtons() {

          for (i = 0; i < marvel.length; i++) {
          let hero = hero[i];
          console.log(i);
          console.log(hero);
          let buttonView = $('buttons-view');
          let button = $('<button>').text(hero);
          buttonView.append(button);

        }

      }

      
      $("#add-gif").on("click", function (event) {
        
        event.preventDefault();

        renderButtons();
      });

      
      renderButtons();
   

    
  });