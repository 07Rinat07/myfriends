<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myfriends' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'MySQL-8.0' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?_a#UbQ*xM],VJzpw+:)a@#^xSZb.2foZYxoOc8+hF,+iPpTRd|Z`3b4JBCC`[Mm' );
define( 'SECURE_AUTH_KEY',  'QCm%=[wn]tQ9E)Mec@e]i,]/RbvH Gb?jH{BL>QS:h3KaFVl?8XY+6qXmvfNppJ4' );
define( 'LOGGED_IN_KEY',    'MSGK_dMv $Zd5N#r]W%ZxP*G@QTF,w-.S__q=%0_,WzaWLP1>w|> L}P=lGU_MJ$' );
define( 'NONCE_KEY',        '(p7WK^O.c;v7K43euy_e*x]v4$Y<*pAwlXJ?lZ{,3Mtsg~3Wou_j16[i;9yo9+J[' );
define( 'AUTH_SALT',        ':a3!,ZXNC<*`xR/`lg+_i2:Oy3T|~hg;6F=_I1`^u,]fs~,K]q5{b!flC2:?0R&o' );
define( 'SECURE_AUTH_SALT', '`to7VT+T-kbg2%d<LjX2=u7rmd~yp[78nC+E$Q<tf*Ndx!,Xhe`Y7kKk}V#7 XHT' );
define( 'LOGGED_IN_SALT',   'k,j` B$.{Eay>1>A,2%y@Q/c5nX<2euTaY64*o5# nw5W.*bSa-ez#FP4_#n$/L!' );
define( 'NONCE_SALT',       '?SL/&Zexsb/a[Nn;7{:KnGoJ`0#xd92hfdSH<fb08}j^}GelD(#TxZ_z|Qx:}]p)' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wps_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
