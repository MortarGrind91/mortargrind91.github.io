function loaderCanvas(el, bubbleFillColor) {
    var blob = new paper.PaperScope();
    blob.setup(el);
    
    var view = blob.view,
        Point = blob.Point,
        Path = blob.Path,
        Group = blob.Group;

    function Bacterium(center, radius, bubbleFillColor) {
        this.build(center, radius, bubbleFillColor);
    }

    Bacterium.prototype = {
        build: function (center, radius, bubbleFillColor) {
            var padding = Math.min(view.size.width, view.size.height) * 0.1;
            var timeScale = 1;
            var maxWidth = view.size.width - padding;
            var maxHeight = view.size.height - padding;
            var w = maxWidth * timeScale;
            var h = maxHeight * timeScale;
            this.fitRect = new Path.Rectangle({
                point: [
                    view.size.width / 2 - w / 2,
                    view.size.height / 2 - h / 2
                ],
                size: [w, h]
            });
            this.circlePath = new Path.Circle(center, radius);
            this.group = new Group([this.circlePath]);
            this.group.position = view.center;
            this.circlePath.fillColor = bubbleFillColor;
            this.circlePath.fullySelected = false;
            var rotationMultiplicator = radius / 200;
            this.threshold = radius;
            this.center = center;
            this.controlCircle = this.circlePath.clone();
            this.controlCircle.fullySelected = false;
            this.controlCircle.visible = false;
            this.circlePath.flatten(radius * 0.5);
            this.circlePath.smooth();
            this.circlePath.fitBounds(this.fitRect.bounds);
            this.settings = [];
            for (var i = 0; i < this.circlePath.segments.length; i++) {
                var segment = this.circlePath.segments[i];
                this.settings[i] = {
                    relativeX: segment.point.x - this.center.x,
                    relativeY: segment.point.y - this.center.y,
                    offsetX: rotationMultiplicator,
                    offsetY: rotationMultiplicator,
                    momentum: new Point(0, 0)
                };
            }
        },
        clear: function () {
            this.circlePath.remove();
            this.fitRect.remove();
        },
        animate: function (event) {
            this.group.rotate(-1, view.center);
            for (var i = 0; i < this.circlePath.segments.length; i++) {
                var segment = this.circlePath.segments[i];
                var settings = this.settings[i];
                var controlPoint = new Point(settings.relativeX + this.center.x, settings.relativeY + this.center.y);
                controlPoint = this.controlCircle.segments[i].point;
                var newOffset = new Point(0, 0);
                newOffset = new Point(this.center._owner.width / this.center._owner.height * Math.floor(Math.random() * (2 - 1 + 1) + 1), this.center._owner.width / this.center._owner.height * Math.floor(Math.random() * (2 - 1 + 1) + 1));
                var newPosition = controlPoint.add(newOffset);
                var distanceToNewPosition = segment.point.subtract(newPosition);
                settings.momentum = settings.momentum.subtract(distanceToNewPosition.divide(5));
                settings.momentum = settings.momentum.multiply(0.2);
                var amountX = settings.offsetX;
                var amountY = settings.offsetY;
                var sinus = Math.sin(event.time + i * 1);
                var cos = Math.cos(event.time + i * 1);
                settings.momentum = settings.momentum.add(new Point(cos * -amountX * 2, sinus * -amountY * 2));
                segment.point = segment.point.add(settings.momentum);
            }
        }
    };
    
    var radius = Math.min(view.size.width, view.size.height) / 2.5;
    var bacterium = new Bacterium(view.bounds.center, radius, bubbleFillColor);
    
    view.onFrame = function (event) {
        bacterium.animate(event);
    };

}

function loadBubbles(bubbles) {
    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];
        var bubbleFillColor = bubble.getAttribute('data-fill');
        bubble.setAttribute('id', 'bubble-' + i);
        
        loaderCanvas(bubble.id, bubbleFillColor);
    }
}

window.onload = function () {
    loadBubbles(document.querySelectorAll('.bubble'));
};