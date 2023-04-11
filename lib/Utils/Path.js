// path components
// M x y                        Move absolute
// m dx dy                      Move relative
// L x y                        Line absolute
// l dx dy                      Line relative
// H x                          Horizontal line absolute
// h dx                         Horizontal line relative
// V y                          Vertical line absolute
// v dy                         Vertical line relative
// Z / z                        Close path
// C x1 y1, x2 y2, x y          Bézier curve absolute
// c dx1 dy1, dx2 dy2, dx dy    Bézier curve relative
// S x2 y2, x y                 More control points absolute
// s dx2 dy2, dx dy             More control points relative
// Q x1 y1, x y                 Quadratic curve absolute
// q dx1 dy1, dx dy             Quadratic curve relative
// T x y                        More control points absolute
// t dx dy                      More control points relative
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
// a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy