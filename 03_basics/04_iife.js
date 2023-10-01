// Immediately Invoke Function Expression ( IIFE )

(function chai() {
    // Named IIFE
    console.log(`DB connected !!`);
} )() ;  // we have to use this ; here to let the program know here we have to stop function execution

( () => {
    // Unnamed IIFE
    console.log(`DB Connected Two !!`);
}) ();

( (name) => {
    console.log(`${name} DB Connected Two !!`);
}) ("hitesh");