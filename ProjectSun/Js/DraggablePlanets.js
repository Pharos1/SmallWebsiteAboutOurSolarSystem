DragTheObject(document.getElementById("DraggableSun"));
DragTheObject(document.getElementById("DraggableMercury"));
DragTheObject(document.getElementById("DraggableVenus"));
DragTheObject(document.getElementById("DraggableEarth"));
DragTheObject(document.getElementById("DraggableMars"));
DragTheObject(document.getElementById("DraggableJupiter"));
DragTheObject(document.getElementById("DraggableSaturn"));
DragTheObject(document.getElementById("DraggableUranus"));
DragTheObject(document.getElementById("DraggableNeptune"));

//Variables
var pos1 = 0;
var pos2 = 0;
var pos3 = 0;
var pos4 = 0;

//Functions
function DragTheObject(TheObject) {
  if (document.getElementById(TheObject.id + "header")) {
    document.getElementById(TheObject.id + "header").onmousedown = MouseDragDown;
  } else {
    TheObject.onmousedown = MouseDragDown;
  }

  function MouseDragDown(Axis) {
    pos3 = Axis.clientX;
    pos4 = Axis.clientY;
    document.onmouseup = StopDraggingTheObject;
    document.onmousemove = ObjectDrag;
  }

  function ObjectDrag(OtherAxis) {
    pos1 = pos3 - OtherAxis.clientX;
    pos2 = pos4 - OtherAxis.clientY;
    pos3 = OtherAxis.clientX;
    pos4 = OtherAxis.clientY;
    TheObject.style.top = (TheObject.offsetTop - pos2) + "px";
    TheObject.style.left = (TheObject.offsetLeft - pos1) + "px";
  }

  function StopDraggingTheObject() {
    document.onmousemove = null,document.onmouseup = null;
  }
}