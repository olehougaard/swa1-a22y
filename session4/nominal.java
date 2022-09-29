interface ObjectType {
    int getX();
    int getY();
}

interface ObjectType2 {
    int getX();
    int getY();
}

public static int sum(ObjectType2 o) {
    return o.getX() + o.getY();
}

ObjectType obj = new ObjectType {
    public int getX() { return 100; }
    public int getY() { return 200; }
}

// ILLEGAL:
sum(obj);
