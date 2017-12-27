persistence.defineMigration(1, {
  up: function() {
    this.createTable('layer_memberships', function(t){
      t.integer('collection_id');
      t.integer('user_id');
      t.integer('user_offline_id');
      t.integer('layer_id');
      t.boolean('read');
      t.boolean('write');
    });
  },
  down: function() {
    this.dropTable('layer_memberships');
  }
});

persistence.defineMigration(2, {
  up: function() {
    this.createTable('memberships', function(t){
      t.integer('collection_id');
      t.integer('user_id');
      t.text('user_email');
      t.boolean('admin');
      t.boolean('can_edit_other');
      t.boolean('can_view_other');
    });
  },
  down: function() {
    this.dropTable('memberships');
  }
});

persistence.defineMigration(3, {
  up: function() {
    this.createTable('site_memberships', function(t){
      t.integer('user_id');
      t.integer('collection_id');
      t.integer('site_id');
      t.boolean('none');
      t.boolean('read');
      t.boolean('write');
    });
  },
  down: function() {
    this.dropTable('site_memberships');
  }
});

persistence.defineMigration(4, {
  up: function() {
    this.createTable('site_notifications', function(t){
      t.integer('collection_id');
      t.integer('site_id');
      t.text('site_name');
      t.json('properties')
      t.integer('alert_id');
      t.text('created_at')
      t.boolean('viewed');
      t.boolean('seen');
    });
  },
  down: function() {
    this.dropTable('site_memberships');
  }
});

persistence.defineMigration(5, {
  up: function() {
    this.addColumn('site_notifications', 'user_id_offline', 'TEXT');
  }
});

persistence.defineMigration(6, {
  up: function() {
    this.createTable('thresholds', function(t){
      t.integer('collection_id');
      t.integer('alert_id');
      t.json('conditions');
      t.text('user_id_offline')
    });
  },
  down: function() {
    this.dropTable('thresholds');
  }
});

persistence.defineMigration(7, {
  up: function() {
    this.addColumn('site_notifications', 'updated_at', 'TEXT');
  }
});

function migrate(){
    persistence.migrations.init( function(){
        persistence.migrate( function(){
            console.log('migration complete!');
        } );
    });
}
