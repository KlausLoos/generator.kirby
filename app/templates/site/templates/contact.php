<?php snippet('header') ?>

  <main>

    <div class="mx-auto max-width-4">

      <?php if ($form->hasMessage()): ?>
        <div class="alert <?php e($form->successful(), 'alert-success' , 'alert-warning')?>">
          <?php $form->echoMessage() ?>
        </div>
      <?php endif; ?>

      <form action="<?php echo $page->url()?>" method="post">

        <div class="required <?php e($form->hasError('first_name'), 'has-error')?>">
          <label for="first_name"><?php echo l::get('first-name'); ?></label>
          <input class="input" type="text" name="first_name" id="first_name" value="<?php $form->echoValue('first_name') ?>" required/>
        </div>
        <div class="required <?php e($form->hasError('family_name'), 'has-error')?>">
          <label for="family_name"><?php echo l::get('family-name'); ?></label>
          <input class="input" type="text" name="family_name" id="family_name" value="<?php $form->echoValue('family_name') ?>" required/>
        </div>

        <div class="required <?php e($form->hasError('_from'), 'has-error')?>">
          <label for="email"><?php echo l::get('email'); ?></label>
          <input class="input" type="email" name="_from" id="email" value="<?php $form->echoValue('_from') ?>" required/>
        </div>

        <div class="required <?php e($form->hasError('tel'), 'has-error')?>">
          <label for="tel"><?php echo l::get('tel'); ?></label>
          <input class="input" type="text" name="tel" id="tel" value="<?php $form->echoValue('tel') ?>" required/>
        </div>

        <div class="required">
          <label for="message"><?php echo l::get('message'); ?></label>
          <textarea name="message" rows="10" id="message"><?php $form->echoValue('message') ?></textarea>
        </div>

        <label class="uniform__potty" for="website">Please leave this field blank</label>
        <input type="text" name="website" id="website" class="uniform__potty" />

        <?php if ($form->hasMessage()): ?>
        <div class="alert <?php e($form->successful(), 'alert-success' , 'alert-warning')?>">
          <?php $form->echoMessage() ?>
        </div>
        <?php endif; ?>

        <button class="button" type="submit" name="_submit" value="<?php echo $form->token() ?>"<?php e($form->successful(), ' disabled')?>><?php echo l::get('submit'); ?></button>

      </form>

    </div>

  </main>


<?php snippet('footer') ?>
