# Chess Board

</br>

#### function main(){
####  &nbsp; &nbsp; &nbsp; chessBoard();
#### }

</br>


#### function chessBoard(){
   
####  &nbsp; &nbsp; &nbsp; draw();
####  &nbsp; &nbsp; &nbsp; draw();
####  &nbsp; &nbsp; &nbsp; last();
   
#### }

</br>

#### function action1(){
####  &nbsp; &nbsp; &nbsp; move();
####  &nbsp; &nbsp; &nbsp; move();
####  &nbsp; &nbsp; &nbsp; putBeeper();
#### }

#### function action2(){
####  &nbsp; &nbsp; &nbsp; move();
####  &nbsp; &nbsp; &nbsp; putBeeper();
#### }

</br>

#### function alternate1(){
####  &nbsp; &nbsp; &nbsp; putBeeper();
####  &nbsp; &nbsp; &nbsp; action1();
####  &nbsp; &nbsp; &nbsp; action1();
####  &nbsp; &nbsp; &nbsp; turnLeft();
####  &nbsp; &nbsp; &nbsp; move();
#### }

</br>

#### function alternate2(){
####  &nbsp; &nbsp; &nbsp; turnLeft();
####  &nbsp; &nbsp; &nbsp; action2();
####  &nbsp; &nbsp; &nbsp; action1();
####  &nbsp; &nbsp; &nbsp; move();
#### }

</br>

#### function midStep(){
####  &nbsp; &nbsp; &nbsp; turnRight();
####  &nbsp; &nbsp; &nbsp; move();
####  &nbsp; &nbsp; &nbsp; turnRight();
#### }

</br>

#### function draw(){
####  &nbsp; &nbsp; &nbsp; alternate1();
   
####  &nbsp; &nbsp; &nbsp; alternate2();
####  &nbsp; &nbsp; &nbsp; midStep();
#### }

</br>

#### function last(){
####  &nbsp; &nbsp; &nbsp; putBeeper();
####  &nbsp; &nbsp; &nbsp; action1();
####  &nbsp; &nbsp; &nbsp; action1();
#### }