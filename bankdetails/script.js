

async function findDetails()
{
    const inputString = document.getElementById("ifsc").value;
    let base_url = "https://ifsc.razorpay.com/";
    fetch(base_url + inputString)
    .then(async (data) => {
        console.log(data);
        if (data.ok) {
            data = await data.json();
            let x = document.getElementById("myTable").rows;
            // console.log(x[0].cells[0].innerHTML);
            // console.log(x[0].cells[1]);
            for(let i=0;i<9;i++)
            {
                let prop = x[i].cells[0].innerHTML ;
                if(data[prop] == "")
                    x[i].cells[1].innerHTML = "Not Available";
                else
                    x[i].cells[1].innerHTML = data[prop];
            }
        }
        else    
        {
            // console.log(data.status);
            alert("You entered wrong IFSC code");
        }
      })
      .catch((e) =>{
        alert("something went wrong please try again");
      });
}
    
    

function clearDetails(){
    let x = document.getElementById("myTable").rows;
    // console.log(x);
    for (let i = 0; i < 9; i++) {
      x[i].cells[1].innerHTML = "Please enter new IFSC code";
    //   console.log(prop);
    }
}

