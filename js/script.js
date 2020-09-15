document.querySelector('#submit').addEventListener("click",displayEntry);
//document.querySelector('#load').addEventListener("click",loadData);
var sec1=document.getElementById("s1");
var sec2=document.getElementById("s2");
var sec3=document.getElementById("s3");
var sec4=document.getElementById("s4");
var del=document.querySelector('.UI');
sec1.style.display="block";


var details=[];
var base_url="localhost/api/";
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/
    var regPh=/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function displayEntry() {
	
	
    var t=new Date();
    var time=t.getTime();
    //console.log(time);
    var fn=document.getElementById("fname").value;
    var mn=document.getElementById("mname").value;
    var ln=document.getElementById("lname").value;
    var email=document.getElementById("email_id").value;
    var mobile=document.getElementById("mob").value;
    var add=document.getElementById("add").value;
    var institute=document.getElementById("iname").value; 
    var gender=document.querySelectorAll('input[type="radio"]');
    var events=document.querySelectorAll('input[type="checkbox"]');
    var sel=document.getElementById("dept");
    var opt=sel.options[sel.selectedIndex];
    var d=new Date();
    var time=d.toLocaleTimeString();
    let selectedValue;
    for (const gen of gender) {
        if (gen.checked) {
            selectedValue = gen.id;
            break;
        }
    }
    //console.log(events);
    let eventdetails="";
    for (const e of events) {
        if (e.checked) {
            eventdetails =eventdetails + " "+e.name;
        }
    }
    if (!fn || !mn || !ln || !email || !institute || !add|| !events || !mobile) {
        alert('Please fill all details');
        return;
    }
    if (fn.length < 3) {
    		alert('Enter valid first name');
    }
    else if (mn.length < 3) {
    	alert('Enter valid middle name');	
    }
    else if (ln.length < 3) {
    	alert('Enter valid last name');	
    }
    else if(!regPh.test(mobile)){
    	alert('Enter valid mobile number');
    }
    else if(!regEmail.test(email))
    {
    	alert("Enter valid email_id");
    }
    else if(add.length<5){
    	alert("Enter full address");
    }
    else if(institute.length<15)
    {
    	alert("Enter full name of institute.");
    }
    else{
    	
        let url ="insert.php?fname="+fn+"&mname="+mn+"&lname="+ln+"&mobile="+mobile+"&email="+email+"&dept="+opt.value+"&gender="+selectedValue+"&event="+eventdetails+"&college="+institute+"&address="+add;
        $.post(url,{},function(data){
            console.log(data);
            if(data == 'Success')
            {
                alert("Your registration is done successfully!");
            }
            else
            {
                console.log(data);
            }
            
        });
        
		
    }
    document.getElementById('fname').value='';
    document.getElementById('mname').value='';
    document.getElementById('lname').value='';
    document.getElementById('iname').value='';
    document.getElementById('mob').value='';
    document.getElementById('email_id').value='';
    document.getElementById('add').value='';
}

function disp(e) {

    if (e=='1') 
    {
        
            sec1.style.display="block";
            sec2.style.display="none";  
            sec3.style.display="none";
            sec4.style.display="none";
    }
    else if(e == '2')
    {
            sec2.style.display="block";
            sec1.style.display="none";  
            sec3.style.display="none";
            sec4.style.display="none";

    }
    else if(e=='3')
    {
            
            sec3.style.display="block";
            sec1.style.display="none";  
            sec2.style.display="none";
            sec4.style.display="none";
    }
    else
    {
            sec4.style.display="block";
            
            del.style.display="none";
            sec1.style.display="none";  
            sec2.style.display="none";
            sec3.style.display="none";

    }
}
function loadData() {
    let row=1;
    let url="read.php";
    //var display=document.getElementById("display");
    $('#display').find("tr").remove();
    let th=[];
    
    $.get(url,function(data){
        //console.log('Data '+data);
        //da=data;
        var table=document.createElement('table');
        var trh=document.createElement('tr');
        var head1=document.createTextNode('Firstname');
        var head2=document.createTextNode('Middlename');
        var head3=document.createTextNode('Lastname');
        var head4=document.createTextNode('Mobile');
        var head5=document.createTextNode('College');
        var head6=document.createTextNode('Email');
        var head7=document.createTextNode('Mobile');
        var head8=document.createTextNode('Department');
        var head9=document.createTextNode('Gender');
        var head10=document.createTextNode('Event');
        for (var i = 0; i < 10; i++) {
            th[i]=document.createElement('th');
            
            trh.appendChild(th[i]);
        }
        th[0].appendChild(head1);
        th[1].appendChild(head2);
        th[2].appendChild(head3);
        th[3].appendChild(head4);
        th[4].appendChild(head5);
        th[5].appendChild(head6);
        th[6].appendChild(head7);
        th[7].appendChild(head8);
        th[8].appendChild(head9);
        th[9].appendChild(head10);

    

        table.appendChild(trh);
        for (var i = 0; i < data.length; i++) {

            //$('#display').detach();
            var tr=document.createElement('tr');
            
            var td1=document.createElement('td');
            var td2=document.createElement('td');
            var td3=document.createElement('td');
            var td4=document.createElement('td');
            var td5=document.createElement('td');
            var td6=document.createElement('td');
            var td7=document.createElement('td');
            var td8=document.createElement('td');
            var td9=document.createElement('td');
            var td10=document.createElement('td');

            
            var text1=document.createTextNode(data[i]['Firstname']);
            var text2=document.createTextNode(data[i]['Middlename']);
            var text3=document.createTextNode(data[i]['Lastname']);
            var text4=document.createTextNode(data[i]['Mobile']);
            var text5=document.createTextNode(data[i]['Email']);
            var text6=document.createTextNode(data[i]['College']);
            var text7=document.createTextNode(data[i]['Address']);
            var text8=document.createTextNode(data[i]['Department']);
            var text9=document.createTextNode(data[i]['Gender']);
            var text10=document.createTextNode(data[i]['Event']);
            //console.log(text1);
            
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            td6.appendChild(text6);
            td7.appendChild(text7);
            td8.appendChild(text8);
            td9.appendChild(text9);
            td10.appendChild(text10);
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);

            table.appendChild(tr);
            document.querySelector('#display').appendChild(table);
           
        }
        });
}
function showUI(id) {

    if (id == 'delete') {
        $('.deleteUI').show();
        $('.updateUI').hide();
        del.style.display="block";
    } 
    else {
        $('.deleteUI').hide();
        $('.updateUI').show();
        del.style.display="block";
    }
    
}

function deleteEntry(){
    var n=document.getElementById('name').value;
    var m=document.getElementById('mob').value;
    
    var url="delete.php?Firstname="+n;
    $.post(url,function (data) {
        alert("Record Deleted");
    })
    document.getElementById('name').value='';
    
}
function updateData() {
    var fn=document.getElementById("ufname").value;
    var mn=document.getElementById("umname").value;
    var ln=document.getElementById("ulname").value;
    var email=document.getElementById("uemail_id").value;
    var mobile=document.getElementById("umob").value;
    var add=document.getElementById("uadd").value;
    var institute=document.getElementById("uiname").value; 
    if (!fn || !mn || !ln || !email || !institute || !add || !mobile) {
        alert('Please fill all details');
        return;
    }
    if (fn.length < 3) {
            alert('Enter valid first name');
    }
    else if (mn.length < 3) {
        alert('Enter valid middle name');   
    }
    else if (ln.length < 3) {
        alert('Enter valid last name'); 
    }
    else if(!regPh.test(mobile)){
        alert('Enter valid mobile number');
    }
    else if(!regEmail.test(email))
    {
        alert("Enter valid email_id");
    }
    else if(add.length<5){
        alert("Enter full address");
    }
    else if(institute.length<15)
    {
        alert("Enter full name of institute.");
    }
    else{
        
        let url ="update.php?fname="+fn+"&mname="+mn+"&lname="+ln+"&mobile="+mobile+"&email="+email+"&college="+institute+"&address="+add;
        $.post(url,{},function(data){
            alert('Record Updated');

            
        });
        document.getElementById('ufname').value='';
        document.getElementById('umname').value='';
        document.getElementById('ulname').value='';
        document.getElementById('uiname').value='';
        document.getElementById('umob').value='';
        document.getElementById('uemail_id').value='';
        document.getElementById('uadd').value='';
           
    }
}