/**
 * 
 *
 * @author Jason Walsh <j@wal.sh>
 * @version 1.0
 * @class
 * @constructor
 */


$.ajax({
  url: 'http://htmlten.com/db/couchdemo/',
  type: 'GET',
  success: function(response){
    console.log(response);
  }
});