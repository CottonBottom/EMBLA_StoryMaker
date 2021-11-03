//https://stackoverflow.com/questions/8936610/how-can-i-create-every-combination-possible-for-the-contents-of-two-arrays

export function combineArrays( arrayOfArrays: any[][] ): any[] {

  // First, handle some degenerate cases...

  if( ! arrayOfArrays ){
      // Or maybe we should toss an exception...?
      return [];
  }

  if( ! Array.isArray( arrayOfArrays ) ){
      // Or maybe we should toss an exception...?
      return [];
  }

  if( arrayOfArrays.length == 0 ){
      return [];
  }

  for( let i = 0 ; i < arrayOfArrays.length; i++ ){
      if( ! Array.isArray(arrayOfArrays[i]) || arrayOfArrays[i].length == 0 ){
          // If any of the arrays in arrayOfArrays are not arrays or zero-length, return an empty array...
          return [];
      }
  }

  // Done with degenerate cases...

  // Start "odometer" with a 0 for each array in array_of_arrays.
  let odometer = new Array( arrayOfArrays.length );
  odometer.fill( 0 ); 

  let output = [];

  let newCombination = formCombination( odometer, arrayOfArrays );

  output.push( newCombination );

  while ( odometerIncrement( odometer, arrayOfArrays ) ){
      newCombination = formCombination( odometer, arrayOfArrays );
      output.push( newCombination );
  }

  return output;
}/* combineArrays() */


// Translate "odometer" to combinations from array_of_arrays
export function formCombination( odometer: any[], arrayOfArrays: any[][] ):any[]{
  // In Imperative Programmingese (i.e., English):
  // let s_output = "";
  // for( let i=0; i < odometer.length; i++ ){
  //    s_output += "" + array_of_arrays[i][odometer[i]]; 
  // }
  // return s_output;

  // In Functional Programmingese (Henny Youngman one-liner):
  return odometer.reduce(
    function(accumulator, odometer_value, odometer_index){
      return "" + accumulator + arrayOfArrays[odometer_index][odometer_value] + ',';
    },
    ""
  );
}/* formCombination() */

export function odometerIncrement( odometer: any[], arrayOfArrays: any[][] ){

  // Basically, work you way from the rightmost digit of the "odometer"...
  // if you're able to increment without cycling that digit back to zero,
  // you're all done, otherwise, cycle that digit to zero and go one digit to the
  // left, and begin again until you're able to increment a digit
  // without cycling it...simple, huh...?

  for( let i_odometer_digit = odometer.length-1; i_odometer_digit >=0; i_odometer_digit-- ){ 

      let maxee = arrayOfArrays[i_odometer_digit].length - 1;         

      if( odometer[i_odometer_digit] + 1 <= maxee ){
          // increment, and you're done...
          odometer[i_odometer_digit]++;
          return true;
      }
      else{
          if( i_odometer_digit - 1 < 0 ){
              // No more digits left to increment, end of the line...
              return false;
          }
          else{
              // Can't increment this digit, cycle it to zero and continue
              // the loop to go over to the next digit...
              odometer[i_odometer_digit]=0;
              continue;
          }
      }
  }/* for( let odometer_digit = odometer.length-1; odometer_digit >=0; odometer_digit-- ) */

}/* odometerIncrement() */
