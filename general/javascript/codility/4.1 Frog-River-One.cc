int solution(int X, vector<int> &A){
    vector<int> B(X, -1);
    for(int i=0; i<A.size(); i++){
        if(A[i] <=X && B[A[i] - 1]=== -1) B[A[i] - 1] = i;
    }

    int max = 0;
    for (int i=0; i<B.size(); i++){
        if(B[i]== -1) return -1;

        if(max < B[i]) max=B[i];
    }

    return -1;
}