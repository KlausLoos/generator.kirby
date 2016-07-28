<?php snippet('header') ?>

  <main>
    <div class="container">
      <div class="row">

        <div class="col-sm-6 col-sm-offset-2">

          <form action="<?php echo $page->url()?>" method="post">

            <div class="row">

              <div class="col-sm-6 form-group required <?php e($form->hasError('first_name'), 'has-error')?>">
                <label for="first_name"><?php echo l::get('first-name'); ?></label>
                <input class="form-control" type="text" name="first_name" id="first_name" value="<?php $form->echoValue('first_name') ?>" required/>
              </div>
              <div class="col-sm-6 form-group required <?php e($form->hasError('family_name'), 'has-error')?>">
                <label for="family_name"><?php echo l::get('family-name'); ?></label>
                <input class="form-control" type="text" name="family_name" id="family_name" value="<?php $form->echoValue('family_name') ?>" required/>
              </div>

            </div>

            <div class="form-group required <?php e($form->hasError('company'), 'has-error')?>">
              <label for="company"><?php echo l::get('company'); ?></label>
              <input class="form-control" type="text" name="company" id="company" value="<?php $form->echoValue('company') ?>" required/>
            </div>

            <div class="row">

              <div class="col-md-6 form-group required <?php e($form->hasError('_from'), 'has-error')?>">
                <label for="email"><?php echo l::get('email'); ?></label>
                <input class="form-control" type="email" name="_from" id="email" value="<?php $form->echoValue('_from') ?>" required/>
              </div>

              <div class="col-md-6 form-group required <?php e($form->hasError('tel'), 'has-error')?>">
                <label for="tel"><?php echo l::get('tel'); ?></label>
                <input class="form-control" type="text" name="tel" id="tel" value="<?php $form->echoValue('tel') ?>" required/>
              </div>

            </div>

            <div class="form-group required">
              <label for="message"><?php echo l::get('message'); ?></label>
              <textarea name="message" id="message" class="form-control"><?php $form->echoValue('message') ?></textarea>
            </div>

            <label class="uniform__potty" for="website">Please leave this field blank</label>
            <input type="text" name="website" id="website" class="uniform__potty" />

            <?php if ($form->hasMessage()): ?>
            <div class="message <?php e($form->successful(), 'success' , 'error')?>">
              <?php $form->echoMessage() ?>
            </div>
            <?php endif; ?>

            <button class="btn btn-primary" type="submit" name="_submit" value="<?php echo $form->token() ?>"<?php e($form->successful(), ' disabled')?>><?php echo l::get('submit'); ?></button>

          </form>

        </div>

      </div>
    </div>
  </main>


<?php snippet('footer') ?>
