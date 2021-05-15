import React from 'react';
import './Rules.css';
import WizardChess from '../../images/w-chess.png';
import Deathly from '../../images/deathly-hollows.png';
import { FcSearch } from 'react-icons/fc';

export default function Rules() {
  return (
    <div className="rules-container">
      <div className="rules-content">
        <div className="appendix ">
          <h1 className="rules-header">Wizard Chess Rules</h1>
          <img src={Deathly} alt="deathly hollows" style={{"width":"350px"}}/>
          <h2 className="rules-header">
            How to Play?
          </h2>
          
          <ol className="ol-links">
            <li><a href="#set-up-chess-board">Set up the Chess Board</a></li>
            <li><a href="#chess-pieces-moves">Learn to move the Pieces</a></li>
            <li><a href="#special-rules-chess">Discover the Special Rules</a></li>
            <li><a href="#first-move-chess">Learn who Makes the First Move</a></li>
            <li><a href="#how-to-win-chess">Check out the rules on How to Win</a></li>
            <li><a href="#chess-strategies">Study the Basic Strategies</a></li>
            <li><a href="#lots-of-games">Practice Playing Lots of Games</a></li>
          </ol>
        </div>

        <div className="rules-description">
          <div className="step-1">
            <h2><strong><a id="set-up-chess-board"></a>Step 1. How to Setup the Chessboard</strong></h2>
            <p>At the beginning of the game the <a href="https://www.chess.com/article/view/how-to-set-up-a-chessboard" target="_blank" title="Set Up Chess Board">chessboard</a> is laid out so that each player has the white (or light) color square in the bottom right-hand side.</p>
            <p><img className="" src="https://images.chesscomfiles.com/uploads/v1/article/17625.ae3f97c6.630x354o.58d32c1e45fd.png" data-src="https://images.chesscomfiles.com/uploads/v1/article/17625.ae3f97c6.630x354o.58d32c1e45fd.png" style={{display: "block" ,marginLeft: "auto", marginRight: "auto"}} alt="Set up Chess Board"/></p>
            <p>The chess pieces are then arranged the same way each time. The second row (or rank) is filled with pawns. The rooks go in the corners, then the knights next to them, followed by the bishops, and finally the queen, who always goes on her own matching color (white queen on white, black queen on black), and the king on the remaining square.</p>
            <p><img className="" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpkX414z.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpkX414z.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto",width:"403px" ,height:"404px"}} alt="Chess board"/></p>
            <p style={{textAlign: "center"}}><em>Set up the pieces at the beginning of the game will be really easy.</em></p>
            <p style={{textAlign: "left"}}><FcSearch/>&nbsp;<strong>Recommended Tool -&gt;</strong> <a href="https://www.chess.com/vision" target="_blank" title="Vision Chess Training">Train your vision of the board</a></p>
          </div>
          <div className="step-2">
           <h2><strong><a id="chess-pieces-moves"></a>Step 2. How the Chess Pieces Move</strong></h2>
            <p>Each of the 6 different kinds of pieces moves differently. Pieces cannot move through other pieces (though the knight can jump over other pieces), and can never move onto a square with one of their own pieces. However, they can be moved to take the place of an opponent's piece which is then captured. Pieces are generally moved into positions where they can capture other pieces (by landing on their square and then replacing them), defend their own pieces in case of capture, or control important squares in the game.</p>
            
            {/* KING */}
            <p>The king is the most important piece, but is one of the weakest. The king can only move one square in any direction - up, down, to the sides, and diagonally.</p>

            <p><iframe width={700} height={370} src="//www.youtube.com/embed/ZWjDKiHBvZo" data-src="//www.youtube.com/embed/ZWjDKiHBvZo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen" /></p>

            <p>The king may never move himself into check (where he could be captured). When the king is attacked by another piece this is called "check".</p>
            <h3><strong>How to Move the King in Chess</strong></h3>

            <p><img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpHLaEcZ.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpHLaEcZ.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="King Chess Movement" width={401} height={401}/></p>

            {/* QUIN */}
            <h3><strong>How to Move the Queen in Chess</strong></h3>
            <p>The queen is the most powerful piece. She can move in any one straight direction - forward, backward, sideways, or diagonally - as far as possible as long as she does not move through any of her own pieces.</p>

            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/vwgwI0wnULU" data-src="//www.youtube.com/embed/vwgwI0wnULU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>

            <p>And, like with all pieces, if the queen captures an opponent's piece her move is over. Notice how the white queen captures the black queen and then the black king is forced to move.</p>

            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpgpXYlQ.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpgpXYlQ.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Queen Chess Movement" width={400} height={401}/></p>

            {/* ROOK */}
            <h3><strong>How to Move the Rook in Chess</strong></h3>
            <p>The rook may move as far as it wants, but only forward, backward, and to the sides.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/PlgnoYqsK-8" data-src="//www.youtube.com/embed/PlgnoYqsK-8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>The rooks are particularly powerful pieces when they are protecting each other and working together!</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpHlPkaE.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpHlPkaE.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Rook Chess Movement" width={398} height={399}/></p>

            {/* BISHOP */}
            <h3><strong>How to Move the Bishop in Chess</strong></h3>
            <p>The bishop may move as far as it wants, but only diagonally. Each bishop starts on one color (light or dark) and must always stay on that color.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/_y3eA21rD1w" data-src="//www.youtube.com/embed/_y3eA21rD1w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>Bishops work well together because they cover up each other's weaknesses.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpOYVVvo.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpOYVVvo.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Bishop Chess Movement" width={400} height={400}/></p>
            <h3><strong>How to Move the Knight in Chess</strong></h3>
            <p>Knights move in a very different way from the other pieces – going two squares in one direction, and then one more move at a 90 degree angle, just like the shape of an “L”.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/VGoT8FR0O_8" data-src="//www.youtube.com/embed/VGoT8FR0O_8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>

            {/* KNIGHT */}
            <p>Knights are also the only pieces that can move over other pieces.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpMl2vJy.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpMl2vJy.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Knight Chess Movement" width={400} height={400}/></p>
            <h3><strong>How to Move the Pawn in Chess</strong></h3>
            <p>Pawns are unusual because they move and capture in different ways: they move forward, but capture diagonally. Pawns can only move forward one square at a time, except for their very first move where they can move forward two squares.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/00uUlbcPz5E" data-src="//www.youtube.com/embed/00uUlbcPz5E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>Pawns can only capture one square diagonally in front of them. They can never move or capture backwards. If there is another piece directly in front of a pawn he cannot move past or capture that piece.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpHVosJK.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpHVosJK.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Pawn chess movement" width={401} height={401}/></p>
            <p><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/trophies.png" data-src="/bundles/web/images/icons/smileys/1x/trophies.png" srcSet="/bundles/web/images/icons/smileys/2x/trophies.png 2x" title="trophies"/>&nbsp;<strong>Recommended Tool -&gt;</strong> <a href="https://www.chess.com/solo-chess" target="_blank" title="Solitaire Chess (capture all your pieces)">Solitaire Chess (capture all your pieces)</a></p>
          </div>
          <div className="step-3">
            <h2><strong><a id="special-rules-chess"></a>Step 3. Discover the Special Rules of Chess</strong></h2>
            <p>There are a few special rules in chess that may not seem logical at first. They were created to make the game more fun and interesting.</p>
            <h3><strong>How to Promote a Pawn in Chess</strong></h3>
            <p>Pawns have another special ability and that is that if a pawn reaches the other side of the board it can become any other chess piece (called <a href="https://www.chess.com/article/view/do-you-know-how-to-promote-a-pawn" target="_blank" title="Pawn Promotion Chess">promotion</a>) excluding a king (or pawn, for that matter).</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/Tt8VTZFPFa4" data-src="//www.youtube.com/embed/Tt8VTZFPFa4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>A pawn may be promoted to a knight, bishop, rook, or queen. A common misconception is that pawns may only be exchanged for a piece that has been captured. That is NOT true. A pawn is usually promoted to a queen. Only pawns may be promoted.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/php2sp106.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/php2sp106.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="How to promote a pawn in chess" width={401} height={401}/></p>
            <h3><strong>How to do "en passant" in chess</strong></h3>
            <p>The last rule about pawns is called “<a href="https://www.chess.com/article/view/how-to-capture-en-passant" target="_blank" title="En Passant Chess Capture">en passant</a>,” which is French for “in passing”.&nbsp;If a pawn moves out two squares on its first move, and by doing so lands to the side of an opponent's pawn (effectively jumping past the other pawn's ability to capture it), that other pawn has the option of capturing the first pawn as it passes by.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phpXrIZEr.jpeg" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phpXrIZEr.jpeg" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Chess en passant" width={600}/></p>
            <p>This special move must be done immediately after the first pawn has moved past, otherwise the option to capture it is no longer available. Click through the example below to better understand this odd, but important rule.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpPbxgAU.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/phpPbxgAU.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="en passant" width={401} height={401}/></p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/c_KRIH0wnhE" data-src="//www.youtube.com/embed/c_KRIH0wnhE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <h3><strong>How to Castle in Chess</strong></h3>
            <p>One other special chess rule is called <a href="https://www.chess.com/article/view/how-to-capture-en-passant" target="_blank" title="How to Castle in Chess">castling</a>. This move allows you to do two important things all in one move: get your king to safety (hopefully), and get your rook out of the corner and into the game. On a player's turn he may move his king two squares over to one side and then move the rook from that side's corner to right next to the king on the opposite side. (See the example below.) However, in order to castle, the following conditions must be met:</p>
            <ul>
              <li>it must be that king's very first move</li>
              <li>it must be that rook's very first move</li>
              <li>there cannot be any pieces between the king and rook to move</li>
              <li>the king may not be in check or pass through check</li>
            </ul>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/FcLYgXCkucc" data-src="//www.youtube.com/embed/FcLYgXCkucc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>Notice that when you castle one direction the king is closer to the side of the board. That is called castling "<strong>kingside</strong>". Castling to the other side, through where the queen sat, is called castling "<strong>queenside</strong>". Regardless of which side, the king always moves only two squares when castling.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/php1yeIwJ.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/php1yeIwJ.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="How to castle in chess" width={399} height={399}/></p>
         
          </div>
          <div className="step-4">
            <h2><strong><a id="first-move-chess"></a>Step 4. Find out Who Makes the First Move in Chess</strong></h2>
            <p>The player with the white pieces always moves first. Therefore, players generally decide who will get to be white by chance or luck such as flipping a coin or having one player guess the color of the hidden pawn in the other player's hand. White then makes a move, followed by black, then white again, then black and so on until the end of the game. Being able to move first is a tiny advantage which gives the white player an opportunity to attack right away.</p>
           
          </div>
          <div className="step-5">
            <h2><strong><a id="how-to-win-chess"></a>Step 5. Review the Rules of How to Win a Game of Chess</strong></h2>
            <p>There are several ways to end a game of chess: by checkmate, with a draw, by resignation, by forfeit on time...</p>
            <h3><strong>How to Checkmate in Chess</strong></h3>
            <p>The purpose of the game is to checkmate the opponent's king. This happens when the king is put into check and cannot get out of check.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/lBsWZqv5acI" data-src="//www.youtube.com/embed/lBsWZqv5acI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p><strong>There are only three ways a king can get out of check:</strong></p>
            <ul>
              <li>move out of the way (though he cannot castle!)</li>
              <li>block the check with another piece or</li>
              <li>capture the piece threatening the king.</li>
            </ul>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/vjJkdBXVgsk" data-src="//www.youtube.com/embed/vjJkdBXVgsk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>If a king cannot escape checkmate then the game is over. Customarily the king is not captured or removed from the board, the game is simply declared over.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/uu7ISsU-Ufw" data-src="//www.youtube.com/embed/uu7ISsU-Ufw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p>The checkmate can happen in early stages in the game if one of the players does not act carefully. Below, you will find an example of the <strong><a href="https://www.chess.com/article/view/the-fastest-possible-checkmate-in-chess" target="_blank" title="Fools Mate Chess">Fools mate</a></strong>, a checkmate that happens in just 2 moves.&nbsp;</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/5qY3aIp4sTw" data-src="//www.youtube.com/embed/5qY3aIp4sTw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <h3><strong>How to Draw a Chess Game</strong></h3>
            <p>Occasionally chess games do not end with a winner, but with a draw. There are 5 reasons why a chess game may end in a draw:</p>
            <ul>
              <li>The position reaches a <a href="https://www.chess.com/article/view/stalemate-chess" target="_blank" title="Stalemate chess">stalemate</a> where it is one player's turn to move, but his king is NOT in check and yet he does not have another legal move:</li>
            </ul>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpJpKI77.png" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpJpKI77.png" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Chess Stalemate" width={403} height={404}/></p>
            <p style={{textAlign: "center"}}><em>With the move Qc7, black is not threatened and can't move. The game is declared draw by stalemate.&nbsp;</em></p>
            <p style={{textAlign: "center"}}><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/DoGVxiU2VFI" data-src="//www.youtube.com/embed/DoGVxiU2VFI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <ul>
              <li>The players may simply agree to a draw and stop playing</li>
              <li>There are not enough pieces on the board to force a checkmate (example: a king and a bishop vs.a king)</li>
              <li>A player declares a draw if the same exact position is repeated three times (though not necessarily three times in a row)</li>
              <li>Fifty consecutive moves have been played where neither player has moved a pawn or captured a piece</li>
            </ul>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/O8cb34ADUCE" data-src="//www.youtube.com/embed/O8cb34ADUCE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <hr/>
          </div>
          <div className="step-6">
            <h2><strong><a id="chess-strategies"></a>Step 6. Study Basic Chess Strategies</strong></h2>
            <p>There are four simple things that every chess player should know:</p>
            <h3><strong>Protect your King</strong></h3>
            <p>Get your king to the corner of the board where he is usually safer. Don't put off castling. You should usually castle as quickly as possible. Remember, it doesn't matter how close you are to checkmating your opponent if your own king is checkmated first!</p>
            <h3><strong>Don't Give Pieces Away</strong></h3>
            <p>Don't carelessly lose your pieces! Each piece is valuable and you can't win a game without pieces to checkmate. There is an easy system that most players use to keep track of the relative value of each chess piece. How much are the chess pieces worth?</p>
            <ul>
            <li>A pawn is worth 1</li>
            <li>A knight is worth 3</li>
            <li>A bishop is worth 3</li>
            <li>A rook is worth 5</li>
            <li>A queen is worth 9</li>
            <li>The king is infinitely valuable</li>
            </ul>
            <p>At the end of the game these points don't mean anything – it is simply a system you can use to make decisions while playing, helping you know when to capture, exchange, or make other moves.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/php78qcGO.gif" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/erik/php78qcGO.gif" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="chess pieces value" width={401} height={401}/></p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/xjwTVIERKjM" data-src="//www.youtube.com/embed/xjwTVIERKjM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <h3><strong>Control the Center of the Chessboard</strong></h3>
            <p>You should try and control the center of the board with your pieces and pawns. If you control the center, you will have more room to move your pieces and will make it harder for your opponent to find good squares for his pieces. In the example above white makes good moves to control the center while black plays bad moves.</p>
            <h3><strong>Use All of your Chess Pieces</strong></h3>
            <p>In the example above white got all of his pieces in the game! Your pieces don't do any good when they are sitting back on the first row. Try and develop all of your pieces so that you have more to use when you attack the king. Using one or two pieces to attack will not work against any decent opponent.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/ffRmXZZDuWM" data-src="//www.youtube.com/embed/ffRmXZZDuWM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p><strong><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/articles.png" srcSet="/bundles/web/images/icons/smileys/2x/articles.png 2x" data-src="/bundles/web/images/icons/smileys/1x/articles.png" srcSet="/bundles/web/images/icons/smileys/2x/articles.png 2x" title="articles"/>&nbsp;Lectura Recomendada -&gt;</strong> <a href="https://www.chess.com/article/view/the-10-most-common-mistakes-among-chess-beginners" target="_blank" title="Chess Mistakes">10 Common Mistakes Among Beginners</a></p>
          </div>
          <div className="step-7">
            <h2><strong><a id="lots-of-games"></a>Step 7. Practice by Playing Lots of Games</strong></h2>
            <p>The most important thing you can do to get better at chess is to play lots of chess! It doesn't matter if you play at home with friends or family, or play online, you have to play the game a lot to improve. These days it's easy to find a game of chess online!</p>
            <p><iframe width={700} height={380} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/Cwf-txEEcS0" data-src="//www.youtube.com/embed/Cwf-txEEcS0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <h3><strong>How to Play Chess Variants</strong></h3>
            <p>While most people play standard chess rules, some people like to play chess with changes to the rules. These are called "chess variants". Each variant has its own rules:</p>
            <ul>
              <li><strong>Chess960</strong>: In Chess960 (Fischer Random), the initial position of the pieces is set at random. Pawns keep their normal initial position but the rest of the pieces are arranged randomly.</li>
              <li><strong>King Of The Hill</strong>: In this format, the goal is to get your king to the center of the board or "top of the hill."</li>
              <li><strong>Bughouse</strong>: This format is played in pairs. When one player captures a piece from the opponent, this piece will become available to his or her teammate. For example: If I play as White and my teammate, who is Black, takes a white knight from her opponent, in my turn I will have a knight that I can put on any free square on my board. I can do so in any of my future turns.</li>
              <li><strong>Crazyhouse:</strong> This is a very exciting format, since it allows you to use the pieces you take from your opponent. That is, if I play as White and I take a black pawn from my opponent, that pawn will turn into a white pawn that I can put on the board as part of my army. I can do so in any of my future turns.</li>
              <li><strong>3-Check</strong>: In this format, the first player who checks the opponent's king three times, wins.</li>
            </ul>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/article/17108.66b3cef0.630x354o.86da3c3b4219.png" data-src="https://images.chesscomfiles.com/uploads/v1/article/17108.66b3cef0.630x354o.86da3c3b4219.png" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Chess Variants"/></p>
            <p style={{textAlign: "center"}}><i>Enjoy chess with these amazing chess variants.</i></p>
            <p style={{textAlign: "left"}}><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/archive.png" srcSet="/bundles/web/images/icons/smileys/2x/archive.png 2x" data-src="/bundles/web/images/icons/smileys/1x/archive.png" srcSet="/bundles/web/images/icons/smileys/2x/archive.png 2x" title="archive"/><strong>&nbsp;Recommended Article&nbsp;-&gt;</strong>&nbsp;<a href="https://www.chess.com/article/view/chess-variants" target="_blank" title="chess variants">5 Amazing Chess Variants</a></p>

            <h3><strong>How to Play Chess960</strong></h3>
            <p><a href="https://www.chess.com/article/view/chess960-fischer-random-explained" target="_blank" title="Chess960">Chess960</a> follows all the rules of standard chess, except for the starting position of pieces on the back rank, which are placed randomly in one of 960 possible positions. Castling is done just like in standard chess, with the King and Rook landing on their normal castled squares (g1 and f1, or c1 and d1). 960 plays just like standard chess, but with more variety in the opening.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phppItnyM.jpeg" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phppItnyM.jpeg" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="chess960" width={400}/></p>
            <p><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/computer.png" data-src="/bundles/web/images/icons/smileys/1x/computer.png" srcSet="/bundles/web/images/icons/smileys/2x/computer.png 2x" title="computer"/><strong>&nbsp;Recommended Tool </strong><strong>-&gt;</strong> <a href="https://www.chess.com/play/computer/chess960" target="_blank" title="Play Chess960 vs the Computer">Play Chess960 vs the Computer</a></p>
            <p><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/chesspawn.png" data-src="/bundles/web/images/icons/smileys/1x/chesspawn.png" srcSet="/bundles/web/images/icons/smileys/2x/chesspawn.png 2x" title="chesspawn"/><strong>&nbsp;Recommended Tool</strong>&nbsp;<strong>-&gt; </strong><a href="https://www.chess.com/chess960" target="_blank" title="Chess960 with Friends">Play Chess960 with Friends</a></p>

            <h3><strong>How to Play with Chess Tournament Rules</strong></h3>
            <p>Many tournaments follow a set of common, similar rules. These rules do not necessarily apply to play at home or online, but you may want to practice with them anyway.</p>
            <ul>
              <li><strong>Touch-move</strong> - If a player touches one of their own pieces they must move that piece as long as it is a legal move. If a player touches an opponent's piece, they must capture that piece. A player who wishes to touch a piece only to adjust it on the board must first announce the intention, usually by saying “adjust”.</li>
              <li><strong>Clocks and Timers</strong> - Most tournaments use timers to regulate the time spent on each game, not on each move. Each player gets the same amount of time to use for their entire game and can decide how to spend that time. Once a player makes a move they then touch a button or hit a lever to start the opponent's clock. If a player runs out of time and the opponent calls the time, then the player who ran out of time loses the game (unless the opponent does not have enough pieces to checkmate, in which case it is a draw).</li>
            </ul>
          </div>    
          <div className="faq">

            <h2><strong>Frequently Asked Chess Questions (FAQs)</strong></h2>
            <p>Maybe all this information can overwhelm you a little bit. That is why we put at your disposal these frequent questions that usually occur in those people who are beginning to enter the world of chess. We hope they're useful to you!</p>
            <h3><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/php25HnuZ.png" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/php25HnuZ.png" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Chess Frequently asked questions" width={400}/></h3>
            <h3><strong>How do I get better at chess?</strong></h3>
            <p>Knowing the rules and basic strategies is only the beginning - there is so much to learn in chess that you can never learn it all in a lifetime! To improve you need to do three things:</p>
            <ol>
            <li><strong>Play lots of chess</strong> — Just keep playing! Play as much as possible. You should learn from each game – those you win and those you lose.</li>
            <li><strong>Study with chess lessons</strong> — If you really want to improve quickly then you should do some online chess lessons. You can find online chess lessons here.</li>
            <li><strong>Have fun</strong> — Don't get discouraged if you don't win all of your games right away. Everyone loses – even world champions. As long as you continue to have fun and learn from the games you lose then you can enjoy chess forever!</li>
            </ol>
            <p><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/stats.png" data-src="/bundles/web/images/icons/smileys/1x/stats.png" srcSet="/bundles/web/images/icons/smileys/2x/stats.png 2x" title="stats"/>&nbsp;<strong>Recommended Article -&gt;</strong> <a href="https://www.chess.com/article/view/how-to-get-better-at-chess" target="_blank" title="7 Tips to Get Better at Chess">7 Tips to Get Better at Chess</a></p>

            <h3><strong>What is the best first move in chess?</strong></h3>
            <p>While there is no one agreed-upon best move in chess, it's important to try to control the center right away. This usually results in most players playing one of their central pawns (in front of king or queen) forward two squares with either 1. d4 or 1. e4. Some other players prefer 1. c4 or 1. Nf3. Most other moves are not as good. Bobby Fischer believed that moving the king-pawn 1. e4 was best.</p>

            <h3><strong>Which color starts in chess?</strong></h3>
            <p>The player with the white pieces always moves first.</p>

            <h3><strong>Can a pawn move backwards?</strong></h3>
            <p>Pawns cannot move backwards. However, when a pawn gets to the other side of the board you must promote it to another piece (such as a queen). Then it moves just like that piece, and can move backwards.</p>

            <h3><strong>Can you move more than one piece at a time in chess?</strong></h3>
            <p>You can only move one chess piece at a time when it is your turn to move - with one exception! When you castle, you move both the king and the rook in one move.</p>

            <h3><strong>Which is the most important chess piece?</strong></h3>
            <p>The king is the most important chess piece. If you lose the king, you lose the game. But the queen is the most powerful chess piece.</p>

            <h3><strong>When was chess invented?</strong></h3>
            <p>The <a href="https://www.chess.com/article/view/the-history-of-chess" target="_blank" title="origins of chess">origins of chess</a> are not exactly clear, though most believe it evolved from earlier chess-like games played in India almost two thousand years ago.The game of chess we know today has been around since the 15th century where it became popular in Europe.</p>
            <p><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/chessbook.png" data-src="/bundles/web/images/icons/smileys/1x/chessbook.png" srcSet="/bundles/web/images/icons/smileys/2x/chessbook.png 2x" title="chessbook"/>&nbsp;<strong>Recommended Article -&gt;&nbsp;</strong><a href="https://www.chess.com/article/view/the-10-most-important-moments-in-chess-history" target="_blank" title="The 10 Most Important Moments in Chess History">The 10 Most Important Moments in Chess History</a></p>

            <h3><strong>What was the longest game in chess history?</strong></h3>
            <p>The longest tournament chess game (in terms of moves) ever to be played was Nikolić vs. Arsović in 1989 and played in Belgrade, Serbia.</p>
            <div style={{textAlign: "center"}}></div>
            <div style={{textAlign: "center"}}><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/articles.png" srcSet="/bundles/web/images/icons/smileys/2x/articles.png 2x" data-src="/bundles/web/images/icons/smileys/1x/articles.png" srcSet="/bundles/web/images/icons/smileys/2x/articles.png 2x" title="articles"/>&nbsp;<a href="https://www.chess.com/article/view/the-4-longest-chess-games-in-history" target="_blank" title="The Longest Chess Games in History">The Longest Chess Games in History (article)</a></div>
            
            <div style={{textAlign: "center"}}></div>
            <h3><strong>What is chess notation?</strong></h3>
            <p>Notation was invented so that we could analyze chess games after playing them. Thanks to it, we can register the whole game in writing and reproduce it as many times as we want. We must only write down our moves and our opponent's moves correctly.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phpOCt9Pu.jpeg" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phpOCt9Pu.jpeg" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} alt="Chess Notation"/></p>
            <p style={{textAlign: "center"}}><em>Chess notation will allow you to store all your games...</em></p>
            <p>Each square has a coordinate and each piece is represented by an initial (N for knight, B for bishop, Q for queen, R for rook, and K for king).</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/XlxDsTzUqbY" data-src="//www.youtube.com/embed/XlxDsTzUqbY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p><img className="img-defer img-defer-placeholder" src="/bundles/web/images/icons/smileys/1x/blogs.png" data-src="/bundles/web/images/icons/smileys/1x/blogs.png" srcSet="/bundles/web/images/icons/smileys/2x/blogs.png 2x" title="blogs"/>&nbsp;<strong>Recommended Article -&gt;&nbsp;</strong><a href="https://www.chess.com/article/view/chess-notation" target="_blank" title="Chess Notation">Chess Notation - The Language of The Game</a></p>
            <h3><strong>What is the goal of chess?</strong></h3>
            <p>Chess is a game played between two opponents on opposite sides of a board containing 64 squares of alternating colors. Each player has 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns.</p>
            <p><img className="img-defer img-defer-placeholder" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phponWi5t.png" data-src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phponWi5t.png" alt="Chess material" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} width={400}/></p>
            <p>The goal of the game is to checkmate the other king. Checkmate happens when the king is in a position to be captured (in check) and cannot escape from capture.</p>
            <p><iframe width={700} height={370} className="video-defer video-defer-placeholder" src="//www.youtube.com/embed/PvFo6eWNssk" data-src="//www.youtube.com/embed/PvFo6eWNssk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe></p>
            <p style={{textAlign: "center"}}><em><a href="https://www.chess.com/register" target="_blank" title="Chess Account"><strong>Ready to start playing chess?</strong></a> Sign up for free at Chess.com and start enjoying the game!</em></p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
