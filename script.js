const ArrayContainer = document.querySelector(".array-container");
const Generate = document.querySelector(".generate");
const SortButton = document.querySelector(".selection-sort");
const BubbleSort = document.querySelector(".bubble-sort");
const MergeSort = document.querySelector(".merge-sort");


Generate.addEventListener("click" , ShowArray);
function ShowArray()
{
    
    for(let i=0;i<50;i++)
    {
        let value = Math.floor(Math.random()*100)+1;
        let valueDiv = document.createElement("div");
        valueDiv.classList.add("valueDiv");
         valueDiv.style.height = `${value*7}px`;
        // valueDiv.style.backgroundcolor = "darkblue";
        valueDiv.textContent = value;
        ArrayContainer.append(valueDiv);
        
    }
}
SortButton.addEventListener("click" , SelectionSort);
BubbleSort.addEventListener("click" , bubblesort );
MergeSort.addEventListener("click" , mergesort);
   

async function SelectionSort(e)
{
    
    let arr = document.querySelectorAll(".valueDiv");
    for(let i=0;i<arr.length;i++)
    {
        arr[i].classList.add("activeclass");
        let minidx = i;
         for(let j=i+1;j<arr.length;j++)
         {
              arr[j].classList.add("activeclass2");
             await new Promise((res) =>{
                 setTimeout(()=>{
                      res();
                 } , 10)
             });

             if(Number(arr[minidx].textContent) > Number(arr[j].textContent))
             {
                 minidx = j;
             }
             arr[j].classList.remove("activeclass2");
              
              
         }

         arr[i].classList.remove("activeclass");
         let minvalue = arr[minidx].textContent;
         let minvalueheight = arr[minidx].style.height;
         arr[minidx].textContent = arr[i].textContent;
         arr[minidx].style.height = arr[i].style.height;
         arr[i].style.height = minvalueheight;
         arr[i].textContent = minvalue;
         arr[i].classList.add("activeclass3");



    }
}




async function bubblesort()
{
    let arr = document.querySelectorAll(".valueDiv");
    for(let i=0;i<arr.length;i++)
    {   
        console.log(i);
         for(let j=0;j<arr.length-i-1;j++)
         {
              arr[j].classList.add("activeclass");
              arr[j+1].classList.add("activeclass2");
              await new Promise((res) =>{
                 setTimeout(()=>{
                      res();
                 } , 10)
               });

             if(Number(arr[j].textContent) > Number(arr[j+1].textContent))
             {
                 let minidx = j+1;
                
                let minvalue = arr[minidx].textContent;
                let minvalueheight = arr[minidx].style.height;
                arr[minidx].textContent = arr[j].textContent;
                arr[minidx].style.height = arr[j].style.height;
                arr[j].style.height = minvalueheight;
                arr[j].textContent = minvalue;
                
                 
             }
             arr[j].classList.remove("activeclass");
             arr[j+1].classList.remove("activeclass2");
              
              
         }
         arr[arr.length-i-1].classList.add("activeclass3");


    }
}



// function merge(arr , start , end)
// {
    
//     start = Number(start);
//     end = Number(end);
//     if(start>=end)
//     {
//         return;
//     }
//     let mid = parseInt(start+(end-start)/2);
//     mid = parseInt(mid);
//     console.log(mid);
//     merge(arr , start , mid);
//     merge(arr , mid+1 , end);

// }

// function mergesort()
// {
    
//     let arr = document.querySelectorAll(".valueDiv");
//     let start =0;
//     let end = arr.length;


       
//     merge(arr , start , end);
// }
