/**
 * Created by admin on 2018/2/26.
 */
/*ѧ�Ƴɼ��������
 true:�ɼ�����
 false:�ɼ��
 �����������,���ڵĳ�Ա�ĸ��Ƴɼ��Ļ򾡿���Ϊtrue
 */
//ԭʼ����
var studentSorce = [
{
    index: '170702',
    chinese: true,
    math: false,
    english: false,
}, 
{
    index: '170708',
    chinese: false,
    math: true,
    english: true,
}, 
{
    index: '170709',
    chinese: false,
    math: false,
    english: false,
}, 
{
    index: '170711',
    chinese: true,
    math: false,
    english: false,
}, 
{
    index: '170724',
    chinese: true,
    math: false,
    english: false,
}, 
{
    index: '170729',
    chinese: true,
    math: true,
    english: false,
}, 
{
    index: '170731',
    chinese: true,
    math: true,
    english: false,
}, 
{
    index: '170735',
    chinese: false,
    math: false,
    english: false,
}, 
{
    index: '170738',
    chinese: false,
    math: true,
    english: false,
}, 
{
    index: '170742',
    chinese: false,
    math: true,
    english: true,
}, 
];
var result = getCombination(studentSorce, 4);
// console.log(result);
var usedIndex = [];
var sorceObj = {};
studentSorce.map(function(value, index) {
    var id = value.index;
    delete value.index;
    sorceObj[id] = value;
}
)
SorceAssmeble(result, selectCombination);
function getCombination(array, n) {
    if (!Array.isArray(array))
        return false;
    var r = [];
    var combinationIdArray = [];
    (function f(t, a, n) {
        if (n == 0)
            return r.push(t);
        for (var i = 0, l = a.length; i <= l - n; i++) {
            f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
    }
    )([], array, n);
    console.log("�����Ϊ" + r.length);
    r.map(function(a, b) {
        var ids = "";
        a.map(function(c, d) {
            ids += c.index + ",";
        }
        )
        combinationIdArray.push(ids.substring(0, ids.lastIndexOf(',')));
    }
    )
    return combinationIdArray;
}
function SorceAssmeble(combination, func) {
    if (!Array.isArray(combination))
        return false;
    for (var i = 0, len = combination.length; i < len; i++) {
        var inds = combination[i].split(",");
        var unused;
        for (var j in inds) {
            unused = true;
            if (usedIndex.indexOf(inds[j]) != -1) {
                //����еĳ�Ա�ѱ�ʹ��������
                unused = false;
                break;
            }
        }
        typeof func === 'function' && unused && func.call(null , inds);
    }
}
function selectCombination(array) {
    var len = array.length;
    var chnVal = false;
    var matVal = false;
    var engVal = false;
    for (var i = 0; i < len; i++) {
        chnVal |= sorceObj[array[i]].chinese;
        matVal |= sorceObj[array[i]].math;
        engVal |= sorceObj[array[i]].english;
    }
    chnVal && matVal && engVal && !function() {
        array.map(function(value, index) {
            usedIndex.push(value);
        }
        )
        console.log("�������" + array.toString());
    }
    ()
}
