<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Playlist</title>
    </head>
    <body>

        <div class="player1">
            <button type="button" name="button">Play</button>
        </div>

        <div class="player2"></div>

        <div class="player2"></div>

        <ul class="playlist">

        </ul>

        <!-- <script src="/vendor/jquery/jquery.min.js" charset="utf-8"></script> -->
        <script src="/dist/aero.js" charset="utf-8"></script>
        <script type="text/javascript">
            (function() {

                new aero.Player({
                    el: '.player',
                    source: '/audio/there-for-you.mp3',
                    autoPlay: true
                });

                // aero.playlist('.playlist', {
                //
                // });

                console.log(aero);
            })();
        </script>
    </body>
</html>
