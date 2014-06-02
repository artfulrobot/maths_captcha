Adds adds a simple maths-based question (e.g. <i>what is 5 plus 8?</i>) to
selected forms to help test whether the user is human or not.

Users with appropriate permission can specify a list of form ids to protect,
which can include wildcards like <code>foo*</code>

The question is inserted before the first submit element, or at the end if a
submit element cannot be found at the time hook_form_alter() is called.

It is a stateless mechanism, so no session variables/cookies are required.
There is a 15 minute timeout from generation to validation.

## How to use

Once installed, go to the configure screen linked to from the modules page,
or found in the menus at:  
Administration → Configuration → Content Authoring → Maths Captcha configuration

There you can enter form Ids to protect. e.g. To protect all node comment forms,
enter: `comment_node_*_form`, using the wildcard `*`.

Only users with the Configure Maths Captcha permission can access this screen.

### Programatic placement

The maths question will be placed immediately before the first submit button,
or at the end of the form. You can override this by providing an element
called `maths_captcha_container`. e.g.

    function yourmodule_some_form()
    {
      // ...
      $form['maths_captcha_container'] = array(
        '#prefix' => '<div class="foo"><h2>Are you human?</h2>',
        '#suffix' => '</div>',
        );
      // ...
    }

### Programatic disable

Sometimes you may not want a form in a particular state/stage to have the
captcha added. All you need to do is:

    $form['#maths_captcha_disable'] = TRUE;

## Coming Soon

1. New permission to bypass it. (e.g. authenticated users)
2. Obfuscation of question in <label>
