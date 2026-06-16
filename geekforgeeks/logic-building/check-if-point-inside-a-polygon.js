// JavaScript program with the same function and variable names as the C++ code

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function point_in_polygon(point, polygon) {
    const num_vertices = polygon.length;
    const x = point.x;
    const y = point.y;
    let inside = false;T

    let p1 = polygon[0];
    let p2;

    for (let i = 1; i <= num_vertices; i++) {
        p2 = polygon[i % num_vertices];

        if (y > Math.min(p1.y, p2.y)) {
            if (y <= Math.max(p1.y, p2.y)) {
                if (x <= Math.max(p1.x, p2.x)) {
                    const x_intersection = ((y - p1.y) * (p2.x - p1.x)) / (p2.y - p1.y) + p1.x;

                    if (p1.x === p2.x || x <= x_intersection) {
                        inside = !inside;
                    }
                }
            }
        }

        p1 = p2;
    }

    return inside;
}

const point = new Point(150, 85);

const polygon = [
    new Point(186, 14),
    new Point(186, 44),
    new Point(175, 115),
    new Point(175, 85)
];

if (point_in_polygon(point, polygon)) {
    console.log("Point is inside the polygon");
} else {
    console.log("Point is outside the polygon");
}