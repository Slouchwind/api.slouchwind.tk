<?php
function number($str)
{
    return preg_replace("/\D/s", "", $str);
}

function hex2rgb($color)
{
    $hexC = str_replace("#", "", $color);
    $lens = strlen(($hexC));
    if ($lens != 3 && $lens != 6) {
        return false;
    }
    $newC = "";
    if ($lens == 3) {
        for ($i = 0; $i < $lens; $i++) {
            $newC .= $hexC[$i] . $hexC[$i];
        }
    } else {
        $newC = $hexC;
    }
    $hex = str_split($newC, 2);
    $rgb = [];
    foreach ($hex as $key => $vls) {
        $rgb[] = hexdec($vls);
    }
    return $rgb;
}

function img($r, $g, $b)
{
    $image = imagecreatetruecolor(200, 100);
    $bgcolor = imagecolorallocate($image, $r, $g, $b);
    imagefill($image, 0, 0, $bgcolor);
    header("Content-Type:image/png");
    imagepng($image);
    imagedestroy($image);
    exit();
}

$rC = number($_GET["r"]);
$gC = number($_GET["g"]);
$bC = number($_GET["b"]);
$g16 = $_GET["g16"];

if (!empty($g16)) {
    $rgbA = hex2rgb($g16);
    img($rgbA[0], $rgbA[1], $rgbA[2]);
}

if (!empty($rC) and !empty($gC) and !empty($bC)) {
    img($rC, $gC, $bC);
}
