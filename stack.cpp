#include <iostream>
// #include <stack>
// #include <queue>
using namespace std;

class stack{
    int* arr;
    int top;
    int n;

    public:
    stack(){
        n = 5;
        arr = new int[n];
        top = -1;
    }

    void push(int x){
        if(top==n-1){
            cout << "stack overflow";
            return ;
        }
        top++;
        arr[top] = x;
    }

    void pop(){
        if(top==-1){
            cout << "no element to pop";
            return ;
        }
        top--;
    }

    int Top(){
        if(top==-1){
            cout << "no element in stack" << endl;
            return -1;
        }
        return arr[top];
    }

    bool empty(){
        if(top==-1){
            return 1;
        }
        return 0;
    }
};

int main(){
    stack st;

    st.push(5);
    st.push(6);

    cout << st.empty()<< endl;

    while(!st.empty()){
    cout << st.Top() << " ";
    st.pop();
    }

    cout << endl;
    cout << st.Top();



    return 0;
}