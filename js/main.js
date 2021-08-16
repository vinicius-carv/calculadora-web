var tela=[];
class Calculadora{
    constructor(num1,num2,op,sc){
        this.num1=[];
        this.num2=[];
        this.op=null;
        this.sc=[];
    }
    Number1(){
        console.log("Num 1 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('1');
            this.sc.push('1');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('1');
            this.sc.push('1');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number2(){
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('2');
            this.sc.push('2');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('2');
            this.sc.push('2');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number3(){
        console.log("Num 3 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('3');
            this.sc.push('3');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('3');
            this.sc.push('3');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number4(){
        console.log("Num 4 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('4');
            this.sc.push('4');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('4');
            this.sc.push('4');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number5(){
        console.log("Num 5 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('5');
            this.sc.push('5');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('5');
            this.sc.push('5');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number6(){
        console.log("Num 6 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('6');
            this.sc.push('6');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('6');
            this.sc.push('6');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number7(){
        console.log("Num 7 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('7');
            this.sc.push('7');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('7');
            this.sc.push('7');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number8(){
        console.log("Num 8 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('8');
            this.sc.push('8');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('8');
            this.sc.push('8');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number9(){
        console.log("Num 9 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('9');
            this.sc.push('9');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('9');
            this.sc.push('9');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Number0(){
        console.log("Num 0 adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('0');
            this.sc.push('0');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('0');
            this.sc.push('0');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Dot(){
        console.log(". adicionado ao calculo");
        if(this.op=='+' || this.op=='-' || this.op=='x' || this.op=='/'){
            this.num2.push('.');
            this.sc.push('.');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }else{
            this.num1.push('.');
            this.sc.push('.');
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
    Clear(){
        console.log("Calculo limpo");
        this.num1=[];
        this.num2=[];
        this.op=[];
        this.sc=[];
        tela=[];
        document.getElementById("tela").innerHTML = tela;
    }
    Add(){
        console.log('Operação de adição foi selecionada')
        this.op='+';
        this.sc.push('+');
        tela=this.sc.join('')
        document.getElementById("tela").innerHTML = tela;
    }
    Minus(){
        console.log('Operação de subtração foi selecionada')
        this.op='-';
        this.sc.push('-');
        tela=this.sc.join('')
        document.getElementById("tela").innerHTML = tela;
    }
    Times(){
        console.log('Operação de multiplicação foi selecionada')
        this.op='x';
        this.sc.push('x');
        tela=this.sc.join('')
        document.getElementById("tela").innerHTML = tela;
    }
    Divid(){
        console.log('Operação de divisão foi selecionada')
        this.op='/';
        this.sc.push('/');
        tela=this.sc.join('')
        document.getElementById("tela").innerHTML = tela;
    }
    Clear(){
        this.num1.length=0;
        this.num2.length=0;
        this.op=null;
        this.sc=[];
        tela=[]
        document.getElementById("tela").innerHTML = tela;
        console.log('Cachê limpo');
    }
    Equal(){
        console.log('Calculando...')
        this.sc.push('=')
        var field1=this.num1.join('');
        var field2=this.num2.join('');
        var number1= parseFloat(field1,10);
        var number2= parseFloat(field2,10);
        console.log(field1+" "+field2+" "+number1+" "+number2+" "); //usado para testes
        var result=null;
        if(number1==null || number2==null){
            console.log("Dados inválidos");
        }else if(this.op=='+'){
            result=number1+number2;
            console.log('O resultado é:'+' '+result.toFixed(3));
            console.log(result);
            this.sc.push(result);
            tela=this.sc.join('');
            document.getElementById("tela").innerHTML = tela;
            /*this.num1=[];
            this.num2=[];
            this.sc=[];
            tela=[];*/
            this.num1=[];
            this.num2=[];
        }else if(this.op=='-'){
            result=number1-number2;
            console.log('O resultado é:'+' '+result.toFixed(3));
            console.log(result);
            this.sc.push(result);
            tela=this.sc.join('');
            document.getElementById("tela").innerHTML = tela;
            /*this.num1=[];
            this.num2=[];
            this.sc=[];
            console.log('Cachê limpo');*/
            this.num1=[];
            this.num2=[];
        }else if(this.op=='x'){
            result=number1*number2;
            console.log('O resultado é:'+' '+result.toFixed(3));
            console.log(result);
            this.sc.push(result);
            tela=this.sc.join('');
            document.getElementById("tela").innerHTML = tela;
            /*this.num1=[];
            this.num2=[];
            this.sc=[];
            console.log('Cachê limpo');*/
            this.num1=[];
            this.num2=[];
        }else if(this.op=='/'){
            result=number1/number2;
            console.log('O resultado é:'+' '+result.toFixed(3));
            console.log(result)
            this.sc.push(result)
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
            /*this.num1=[];
            this.num2=[];
            this.sc=[];
            console.log('Cachê limpo');*/
            this.num1=[];
            this.num2=[];
        }else{
            //alert("Operação não selecionada");
            this.num1=[];
            this.num2=[];
            this.sc=[];
            this.sc.push('Error')
            tela=this.sc.join('')
            document.getElementById("tela").innerHTML = tela;
        }
    }
}