# Options

<?js var root = members.classes.filter(member => member.name === 'FlipClock').pop() ?>

<?js= JSON.stringify(root) ?>

<dl>
<?js root.params.forEach(function(param) { ?>

<dt class="name"><?js= param.name ?><span class="type-signature"> :string</span></dt>
<?js= JSON.stringify(param) ?>
<?js }); ?>
</dl>