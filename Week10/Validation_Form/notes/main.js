 /**Client-side Form Validation
  * Ensurement that all required form controls are  filled out in the correct format.
  * Helps ensure data submitted matches the requirements set forth in the various form controls
  */

 /**Form Validation
  * Is when we enter data, the browser and/or the web server will check to see that the data is in the 
  * correct format and within the constrainst set by the application.
  * -client-side validation, when validation is done in the browser
  * -server-validation, when validationis done on the server
  * --Main reasons to validate our forms:
  * 1- We want get the right data, in the right format
  * 2-We want to protect our users' data
  * 3- We want to protect ourselves
  */

 /**Different types of client-site validation 
  * 1- Built-in form validation: uses HTML5 form validation features
  * 2- Javascript validation: is coded using Javascript
  */

 /**Buil-in form validation
  * validate most user data without relying on JAvascript.
  * use valiadtion attributes on form elements like:
  * -required: specifies whether a form field needs to be filled in before the form can be submitted
  * -minlenght and maxlength: specifies the minimum and maximum lenght of textual data(strings)
  * -min and max: specifies the minimum and maximum values of numerical input types
  * -types: specifies whether the data needs to be a number, and email address, or some other specific preset type
  * - pattern: specifies a regular expression that defines a pattern the entered data needs to follow
  */
 /**When an element is valid:
  * The element matches the :valid CSS pseudo-class, which lets you apply a specific style to valid elements.
I * the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).
  */

 /**When an element is invalid:
  * The element matches the :invalid CSS pseudo-class, and sometimes other UI pseudo-classes (e.g., :out-of-range) depending on the error, which lets you apply a specific style to invalid elements.
  * The browser will block the form and display an error message
  */

 /**simple validation example:
  * fruit-star.html
  */

 /**The required attribute
  * :required attribute , is the simples HTML5 validation feature to make an input mandatory
  */

 /**Validation aganst a regular expression
  * -pattern attribute, expetcs a REgular Expresiion as its value,
  * -a regular expression (regex) is a pattern that can be used to match character combiantion in text strings, 
  * so they are ideal for form vaildation and serve a variety of other uses in javacript
  * some examples:
  * a — Matches one character that is a (not b, not aa, and so on).
  * abc — Matches a, followed by b, followed by c.
  * ab?c—Matches a, optionally followed by a single b, followed by c. ( ac or abc)
  * ab*c—Matches a, optionally followed by any number of bs, followed by c. ( ac , abc, abbbbbc, and so on).
  * a|b — Matches one character that is a or b.
  * abc|xyz — Matches exactly abc or exactly xyz (but not abcxyz or a or y, and so on).
  */

 /**Constraining the values of your entries
  * fruit-start2.html
  */

 /**Full Example
  * fruit-length.html
  */

 /**Validation forms using Javascript
  * to deal with legacy browsers that do not support HTML's built-in form validation
  */

 /**the Constraint Validation API
  * consist of a set of methods and properties available on the following form element DOM interfaces:
  * HTMLButtonElement (represents a <button> element)
  * HTMLFieldSetElement (represents a <fieldset> element)
  * HTMLInputElement (represents an <input> element)
  * HTMLOutputElement (represents an <output> element)
  * HTMLSelectElement (represents a <select> element)
  * HTMLTextAreaElement (represents a <textarea> element)
  */

 /**constraint validation properties:
  * -validationMessage: Returns a localized message describing the validation constraints that
  *  the control doesn't satisfy (if any). If the control is not a candidate for
  *  constraint validation (willValidate is false) or the element's value satisfies 
  * its constraints (is valid), this will return an empty string.
  *--validity: Returns a ValidityState object that contains several properties describing the validity state of the element.
  * below is listed a few of the more common ones:
  *-patternMismatch: Returns true if the value does not match the specified pattern, and false if it does match. 
  *-tooLong: Returns true if the value is longer than the maximum length specified by the maxlength attribute, 
  * or false if it is shorter than or equal to the maximum.
  *-tooShort: Returns true if the value is shorter than the minimum length specified by the minlength attribute, 
  * or false if it is greater than or equal to the minimum. 
  *-rangeOverflow: Returns true if the value is greater than the maximum specified by the max attribute,
  * or false if it is less than or equal to the maximum. 
  *-rangeUnderflow: Returns true if the value is less than the minimum specified by the min attribute,
  * or false if it is greater than or equal to the minimum. 
  *-typeMismatch: Returns true if the value is not in the required syntax (when type is email or url),
  * or false if the syntax is correct. 
  *-valid: Returns true if the element meets all its validation constraints,
  * and is therefore considered to be valid, or false if it fails any constraint. 
  *-valueMissing: Returns true if the element has a required attribute, but no value, 
  * or false otherwise. 
  *-willValidate: Returns true if the element will be validated when the form is submitted; false otherwise.
  */

 /**The Constraint Validation API  methods:
  * checkValidity(): Returns true if the element's value has no validity problems; false otherwise.
  * reportValidity(): Reports invalid field(s) using events. Useful in combination with preventDefault() in an onSubmit event handler
  * setCustomValidity(message): Adds a custom error message to the element; if you set a custom error message, 
  * the element is considered to be invalid, and the specified error is displayed.
  *  This lets you use JavaScript code to establish a validation failure other than those offered by 
  * the standard HTML5 validation constraints. The message is shown to the user when reporting the problem. */

 //fruit-start.html