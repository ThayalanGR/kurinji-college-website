<?php
chdir(dirname(__DIR__));

require_once('vendor/autoload.php');

use Zend\Config\Config;
use Zend\Config\Factory;
use Zend\Http\PhpEnvironment\Request;
use Firebase\JWT\JWT;

$config = new Zend\Config\Config(include 'config/config.php');// Create a Zend Config Object


if (true) {
    $tokenId    = base64_encode("asdfsndfwyernkay24234jniu");
    $issuedAt   = time();
    $notBefore  = $issuedAt + 10;             //Adding 10 seconds
    $expire     = $notBefore + 60;            // Adding 60 seconds
    $serverName = $config->get('serverName'); // Retrieve the server name from config file
    
    /*
     * Create the token as an array
     */
    
    $data = [
        'iat'  => $issuedAt,         // Issued at: time when the token was generated
        'jti'  => $tokenId,          // Json Token Id: an unique identifier for the token
        'iss'  => $serverName,       // Issuer
        'nbf'  => $notBefore,        // Not before
        'exp'  => $expire,           // Expire
        'data' => [                  // Data related to the signer user
            'userId'   => "dummyid", // userid from the users table
            'userName' => "dummyname", // User name
        ]
    ];





    $secretKey = base64_decode($config->get('jwtkey'));
    
    // echo $secretKey;
    /*
     * Encode the array to a JWT string.
     * Second parameter is the key to encode the token.
     * 
     * The output string can be validated at http://jwt.io/
     */
    $jwt = JWT::encode(
        $data,      //Data to be encoded in the JWT
        $secretKey, // The signing key
        'HS512'     // Algorithm used to sign the token, see https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40#section-3
        );
        
    $unencodedArray = ['jwt' => $jwt];
    echo json_encode($unencodedArray);
    /*
     * More code here...
     */
}


