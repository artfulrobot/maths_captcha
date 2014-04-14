Adds adds a simple maths-based question (e.g. <i>what is 5 plus 8?</i>) to
selected forms to help test whether the user is human or not.

Users with appropriate permission can specify a list of form ids to protect,
which can include wildcards like <code>foo*</code>

The question is inserted before the first submit element, or at the end if a
submit element cannot be found at the time hook_form_alter() is called.

It is a stateless mechanism, so no session variables/cookies are required.
There is a 15 minute timeout from generation to validation.
