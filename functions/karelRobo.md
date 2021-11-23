## Moving Robot to Top Right corner

#### /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
####  **/

</br>
</br>
 
#### function main(){
####  &nbsp; &nbsp; &nbsp; putBeeperDiagonally();
#### }

</br>

#### function goToTopRight(){
####  &nbsp; &nbsp; &nbsp; putBeeper();
####  &nbsp; &nbsp; &nbsp; placeBeeper();
####  &nbsp; &nbsp; &nbsp; placeBeeper();
####  &nbsp; &nbsp; &nbsp; placeBeeper();
####  &nbsp; &nbsp; &nbsp; placeBeeper();
#### }

</br>

#### function moveFourTImes(){
####  &nbsp; &nbsp; &nbsp; move();
####  &nbsp; &nbsp; &nbsp; turnLeft();
####  &nbsp; &nbsp; &nbsp; move();
####  &nbsp; &nbsp; &nbsp; putBeeper();
####  &nbsp; &nbsp; &nbsp; turnRight();
#### }
