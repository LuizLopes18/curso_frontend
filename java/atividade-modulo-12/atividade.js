
//1)

a = 10 + 15;
console.log(a);
console.log(typeof a);

b = "10" + 2;
console.log(b);
console.log(typeof b);

c = "10" * 2;
console.log(c);
console.log(typeof c);

d = "10" / 3;
console.log(d);
console.log(typeof d);

e = "10" % 3;
console.log(e)
console.log(typeof e);

f = 10 + true;
console.log(f)
console.log(typeof f);

g = 10 == "10";
console.log(g)
console.log(typeof g);

h = 10<11;
console.log(h)
console.log(typeof h);

i = 10>12;
console.log(i)
console.log(typeof i);

j = 10<=10*1;
console.log(j)
console.log(typeof j);

k = 10>9.99;
console.log(k)
console.log(typeof k);

l = 10!="dez";
console.log(l)
console.log(typeof l);

m = 10 + true;
console.log()
console.log(typeof m);

n = "dez"+true;
console.log(n)
console.log(typeof n);

o = 10 + false;
console.log(o)
console.log(typeof o);

p = 10 * false;
console.log(p)
console.log(typeof p);

q = true + true;
console.log(q)
console.log(typeof q);

r = 10;
r++;
console.log(r)
console.log(typeof r);

s = 10;
s--;
console.log(s)
console.log(typeof s);

t = 1 & 1 ;
console.log(t)
console.log(typeof t);

u = 1 & 0;
console.log(u)
console.log(typeof u);

v = 0 & 0 ;
console.log(v)
console.log(typeof v);

w = 0/1 ;
console.log(w)
console.log(typeof w);

x = 5+5==10 ;
console.log(x)
console.log(typeof x);

y = "5"+"5"==10 ;
console.log(y)
console.log(typeof y);

z = "5" * 2 > 9 ;
console.log(z)
console.log(typeof z);

ç = (10+10)*2;
console.log(ç)
console.log(typeof ç);

ultimo = 10 + 10 * 2;
console.log(ultimo);
console.log(typeof ultimo);

//2)
var branco = 'preto';
var preto = 'cinza';
var cinza = 'branco';
var carro = 'preto';
var valor=30000;
var prestacao = 750;

//a)
console.log(branco == 'branco');

//b)
console.log(branco==cinza);

//c)
console.log(carro==branco);

//d)
var cavalo = carro;
cav= cavalo == 'preto' ? 'cinza' : 'marrom';
console.log(cav);

//e)
prestacao = 30000/3000;
console.log('São necessárias ' + prestacao + ' prestações');


//f)
soma = branco + preto + cinza;
console.log(soma)
console.log(soma.length + ' caracteres')