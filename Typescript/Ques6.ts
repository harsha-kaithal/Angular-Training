class startingAlphabetAndCount {
    private str:string;
    setVal(variable:string)
    {
        this.str=variable.toLowerCase();
    };

    Operation() {
        let count=0;
        if(this.str.charAt(0)=='a'||this.str.charAt(0)=='i'||this.str.charAt(0)=='e'||this.str.charAt(0)=='o'||this.str.charAt(0)=='u')
        {
            console.log("If starting alphabet is Vowel then");
            for(let i:number=0;i<this.str.length;i++)
            {
                if(this.str[i]!='a' && this.str[i]!='i' && this.str[i]!='e' && this.str[i]!='o' && this.str[i]!='u')
                {
                    count++;
                }
            }  
            console.log("No. of Consonants in given word: "+count)      
        }

        else {
            console.log("If starting alphabet is Consonant then");
            for(let i:number=0;i<this.str.length;i++)
            {
                if(this.str[i]=='a'||this.str[i]=='i'||this.str[i]=='e'||this.str[i]=='o'||this.str[i]=='u')
                {
                    count++;
                }
            } 
            console.log("No. of Vowels in given word: "+count)      
        }  
    };

    display(){

    };
}

let checkWord = new startingAlphabetAndCount();
checkWord.setVal("Harsha");
checkWord.Operation();