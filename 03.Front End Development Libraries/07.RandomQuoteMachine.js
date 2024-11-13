


//jQuery
// the function whwen loading the Web site
$(document).ready(function() {
  
  // getting quote data
   $('#new-quote').click(function() {
     $.ajax({
       url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', // API endpoint
       method: 'GET',  // HTTP method
       dataType: 'json',  // data type
       
       success: function(data) {
         const getAllQuote = data.quotes;
         
         // creating radam array's index
         const randomIndex = Math.floor(Math.random() * getAllQuote.length);
         
         const randomQuote = getAllQuote[randomIndex];
         // console.log(randomQuote.quote);
         // console.log(randomQuote.author);
         
         // display getting data to text and author
         $('#text').text(randomQuote.quote);
         $('#author').text(randomQuote.author);
        
       },
       error: function(error) {
         console.error('Error is happened:', error);
       }
     });
   });
  
  // post randam quote to twitter
  $('#tweet-quote').click(function(event) {
    // cancelling defalut action
    event.preventDefault();

    // create tweet's content
    const text = $('#text').text() + ' - ' + $('#author').text();
    const url = $(this).attr('href');
    const newUrl = url + encodeURIComponent(text);

    // Open tweeter
    window.open(newUrl, '_blank');
  });
  
});
