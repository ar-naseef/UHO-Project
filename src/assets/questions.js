const questions = [{
        category: "Food Safety",
        question: "Foodborne diseases can cause death",
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Food contaminated with harmful bacteria, viruses, parasites or chemical substances, causes more than 200 diseases-ranging from diarrhea to cancer and can lead to death`,
        correctAns: null
    }, {
        category: `Food Safety`,
        question: `If food looks OK and smells OK it is safe to eat`,
        answers: [{
                ans: `True`,
                correct: false
            }, {
                ans: `False`,
                correct: true
            }
        ],
        explanation: `The smell, taste and appearance of food are not good indicators of whether the food will make you sick. Some dangerous microorganisms do not change the appearance of the food, while the other microorganisms which can cause our food to smell bad, taste horrible and look disgusting will not cause disease`,
        correctAns: null
    }, {
        category: `Food Safety`,
        question: `The proper temperature for a home refrigerator should be`,
        answers: [{
                ans: `Above 5C`,
                correct: false
            }, {
                ans: `Below 5C`,
                correct: true
            } 
        ],
        explanation: `By holding temperatures below 5 o C the growth of microorganisms is slowed down or stopped.`,
        correctAns: null
    }, {
        category: `Food Safety`,
        question: `Keeping raw and cooked food separate prevents cross-contamination`,
        answers: [{
                ans: `True`,
                correct: true
            },
            {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Keeping raw and cooked food separate prevents the transfer of microorganisms. Raw food, especially meat, poultry and seafood can contain dangerous microorganisms which may be transferred onto other foods during food preparation and storage`,
        correctAns: null
    }, {
        category: `Tuberculosis`,
        question: `What is the theme for Tuberculosis Day 2019? `,
        answers: [{
                ans: `United to End TB`,
                correct: false
            }, {
                ans: `Its Time`,
                correct: true
            }, {
                ans: `Treat TB`,
                correct: false
            }
        ],
        explanation: `The theme of World TB Day 2019 - ‘It’s time’ – puts the accent on the urgency to act on the commitments made by global leaders to.`,
        correctAns: null
    }, {
        category: `Tuberculosis`,
        question: `Can TB be cured?`,
        answers: [{
                ans: `Yes`,
                correct: true
            }, {
                ans: `No`,
                correct: false
            } 
        ],
        explanation: `Yes. TB can be cured if the full course of the prescribed drugs is taken regularly, and without interruption.`,
        correctAns: null
    }, {
        category: `Hepatitis`,
        question: `What are the different types of Hepatitis?`,
        answers: [{
                ans: `E, F, G, H, I`,
                correct: false
            }, {
                ans: `B, C, N, R, L`,
                correct: false
            }, {
                ans: `A, B, C, D, E`,
                correct: true
            }
        ],
        explanation: `Scientists have identified 5 unique hepatitis viruses, identified by the letters A, B, C, D, and E. While all cause liver disease, they vary in important ways.`,
        correctAns: null
    }, {
        category: `Hepatitis`,
        question: `Hepatitis A and E are typically caused by...`,
        answers: [{
                ans: `Contaminated food or water`,
                correct: true
            }, {
                ans: `Contaminated blood`,
                correct: false
            }, {
                ans: `Sexualcontact`,
                correct: false
            } 
        ],
        explanation: `Hepatitis A and E are typically caused by consumption of contaminated food or water.`,
        correctAns: null
    }, {
        category: `HIV/AIDS`,
        question: `What are common ways to prevent HIV transmission?`,
        answers: [{
                ans: `Usage of Male and Female Condoms`,
                correct: false
            }, {
                ans: `Testing for HIV and STIs`,
                correct: false
            }, {
                ans: `Don’t share needles`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            } 
        ],
        explanation: `Individuals can reduce the risk of HIV infection by limiting exposure to risk factors. The above listed are some of the prevention methods.`,
        correctAns: null
    }, {
        category: `HIV/AIDS`,
        question: `All HIV testing services must follow the 5 Cs principles recommended by WHO. What are the 5C principals?`,
        answers: [{
                ans: `Contact, Convert, Combat, Cohere, and Connect`,
                correct: false
            }, {
                ans: `Consent, Confidentiality, Counseling, Correct Test Results and Connection`,
                correct: true
            }, {
                ans: `Call, Covert, Correct, Consistent Results and Counsel`,
                correct: false
            } 
        ],
        explanation: `All forms of HIV testing and counselling should be voluntary and adhere to the five C's: consent, confidentiality, counselling, correct test results and connections to care, treatment and prevention services. The following key principles apply to all models of HIV testing and counselling and in all circumstances.`,
        correctAns: null
    }, {
        category: `Diabetes`,
        question: `Obesity increase the risk of getting diabetes`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Overweight and obesity are major risk factors for a number of noncommunicable diseases, including type 2 diabetes. The likelihood of developing type 2 diabetes rises steeply with increasing obesity`,
        correctAns: null
    }, {
        category: `Diabetes`,
        question: `Risk of getting diabetes is higher if parent has it`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Children of people with type 1 or type 2 diabetes face a higher risk of developing the disease compared to the general population`,
        correctAns: null
    }, {
        category: `Diabetes`,
        question: `Diabetes can cause kidney failure and blindness`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Diabetes is a leading cause of kidney failure, while retinopathy due to diabetes is a major cause of blindness. Diabetes is also a risk factor for heart attacks, strokes and lower limb amputations`,
        correctAns: null
    }, {
        category: `Diabetes`,
        question: `Regular physical activity has no impact on preventing diabetes, its control or its complications`,
        answers: [{
                ans: `True`,
                correct: false
            }, {
                ans: `False`,
                correct: true
            }
        ],
        explanation: `Regular, moderate-intensity physical activity can help in prevention and treatment of diabetes. Type 2 diabetes, which comprises 90% of cases, is largely caused by excess body weight and physical inactivity`,
        correctAns: null
    }, {
        category: `Noncommunicable Diseases (NCDs)`,
        question: `Choose which behavioral risk factors contribute to a person developing a NCD?`,
        answers: [{
                ans: `Tobacco use`,
                correct: false
            }, {
                ans: `Harmful use of alcohol`,
                correct: false
            }, {
                ans: `Unhealthy diet`,
                correct: false
            }, {
                ans: `Physical inactivity`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            }
        ],
        explanation: `These 4 common behavioral risk factors increase the risk of people developing one or more NCDs. Globalization, population growth, and population ageing are factors in the increasing NCD burden`,
        correctAns: null
    }, {
        category: `Noncommunicable Diseases (NCDs)`,
        question: `Of the following, which disease causes most death in the Maldives?`,
        answers: [{
                ans: `NCDs `,
                correct: true
            }, {
                ans: `HIV/AIDS`,
                correct: false
            }, {
                ans: `Malaria`,
                correct: false
            }, {
                ans: `Tuberculosis`,
                correct: false
            }
        ],
        explanation: `NCDs cause approximately 80% of the deaths in Maldives`,
        correctAns: null
    }, {
        category: `Noncommunicable Diseases (NCDs)`,
        question: `The following is a good way to prevent noncommunicable disease`,
        answers: [{
                ans: `Eating more salt`,
                correct: false
            }, {
                ans: `Eating more sugar`,
                correct: false
            }, {
                ans: `Eating more vegetables and fruits`,
                correct: true
            }
        ],
        explanation: `Unhealthy diets are a leading risk factor for developing obesity and NCDs, including diabetes, heart disease, and cancer. Preventing these NCDs means eating more fruits and vegetables, and limiting the consumption of processed foods high in salt, sugar and fat`,
        correctAns: null
    }, {
        category: `Universal Health Coverage`,
        question: `How much of the world’s population is not able to obtain the health services they need?`,
        answers: [{
                ans: `At least 30% of the world’s population`,
                correct: false
            }, {
                ans: `At least 50% of the world’s population`,
                correct: true
            }, {
                ans: `At least 70% of the world’s population`,
                correct: false
            }, {
                ans: `At least 90% of the world’s population`,
                correct: false
            }
        ],
        explanation: `At least half (or 50%) of the world’s population is not able to obtain the health services they need`,
        correctAns: null
    }, {
        category: `Universal Health Coverage`,
        question: `Globally, about 100 million people are being pushed into ‘extreme poverty’ (living on $1.90 or less a day) because they have to pay for health care services`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `About 100 million people are getting poorer because they are made to pay for health care services out of their pockets`,
        correctAns: null
    }, {
        category: `Universal Health Coverage`,
        question: `Who has a part to play in advocating for universal health coverage?`,
        answers: [{
                ans: `You`,
                correct: false
            }, {
                ans: `NGOs`,
                correct: false
            }, {
                ans: `Health workers`,
                correct: false
            }, {
                ans: `Media`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            }
        ],
        explanation: `Everyone, everywhere, has the ability to advocate for universal health coverage both for themselves and others.`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `How long does it take for cervical cancer to develop in women with normal immune systems after initial infection?`,
        answers: [{
                ans: `15-20 years`,
                correct: true
            }, {
                ans: `2-5 years`,
                correct: false
            }
        ],
        explanation: `It takes 15 to 20 years for cervical cancer to develop in women with normal immune systems. It can take only 5 to 10 years in women with weakened immune system, such as those with untreated HIV infection`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `Are vaccines available to protect against HPV?`,
        answers: [{
                ans: `Yes`,
                correct: true
            }, {
                ans: `No`,
                correct: false
            }
        ],
        explanation: `Yes. There are currently 3 vaccines on the marker, all of which protect against HPV 16 and 18, the two types causing 70% of cervical cancer cases. HPV works best if administered prior to exposure to human papillomavirus`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `There is no cure for polio`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `There is no cure for polio, it can only be prevented. Polio vaccine, given multiple times, can protect a child against the disease for life`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `Immunization is the process whereby a person is made immune or resistant to an infectious disease, typically by the administration of a vaccine`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Immunization is the process whereby a person is made immune or resistant to an infectious disease, typically by the administration of a vaccine. Vaccines stimulate the body’s own immune system to protect the person against subsequent infection or disease`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `Measles is a serious disease caused by`,
        answers: [{
                ans: `Bacteria`,
                correct: false
            }, {
                ans: `Virus`,
                correct: true
            }
        ],
        explanation: `Measles is a serious disease caused by a virus. It spreads through direct contact and through the air when infected people cough and sneeze`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `Which of the following is NOT a vaccine-preventable disease?`,
        answers: [{
                ans: `Cervical cancer`,
                correct: false
            }, {
                ans: `Polio`,
                correct: false
            }, {
                ans: `Hepatitis B`,
                correct: false
            }, {
                ans: `Asthma`,
                correct: true
            }, {
                ans: `Measles`,
                correct: false
            }
        ],
        explanation: `Immunization prevents illness, disability and death from vaccine-preventable diseases including cervical cancer, diphtheria, hepatitis B, measles, mumps, pertussis (whooping cough), pneumonia, polio, rotavirus diarrhoea, rubella and tetanus`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `The biggest challenges to improving global vaccine coverage are:`,
        answers: [{
                ans: `Limited resources`,
                correct: false
            }, {
                ans: `Competing health priorities`,
                correct: false
            }, {
                ans: `Poor management of health systems`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            }
        ],
        explanation: `Despite improvements in global vaccine coverage during the past decade, there continue to be regional and local disparities resulting from limited resources; competing health priorities; poor management of health systems; and inadequate monitoring and supervision`,
        correctAns: null
    }, {
        category: `Immunization/Vaccines`,
        question: `How can measles be prevented?`,
        answers: [{
                ans: `1 dose of measles vaccine`,
                correct: false
            }, {
                ans: `2 doses of measles vaccine`,
                correct: true
            }
        ],
        explanation: `The best protection against measles is through immunization. Two doses of measles vaccine are recommended to ensure immunity and prevent outbreaks. The vaccine is often given in a combined vaccine that also protects against rubella and/or mumps.`,
        correctAns: null
    }, {
        category: `Blood Donation`,
        question: `I can donate blood at any age`,
        answers: [{
                ans: `True`,
                correct: false
            }, {
                ans: `False`,
                correct: true
            }
        ],
        explanation: `The age at which people are eligible to donate blood varies between countries but it is commonly between 17-65 years old. However, you will be accepted as a blood donor only if you are fit and healthy`,
        correctAns: null
    }, {
        category: `Blood Donation`,
        question: `The amount/volume of blood collected at one time is`,
        answers: [{
                ans: `450 millilitres`,
                correct: true
            }, {
                ans: `1 litre`,
                correct: false
            }, {
                ans: `5 litres`,
                correct: false
            }
        ],
        explanation: `In most countries, the volume taken is 450 millilitres, less than 10% of an adult’s total blood volume (on average, an adult has 4.5 - 5 litres of blood). The lost fluid is replaced by the body within 36 hours`,
        correctAns: null
    }, {
        category: `Blood Donation`,
        question: `Before giving blood, I should`,
        answers: [{
                ans: `Eat a heavy meal`,
                correct: false
            }, {
                ans: `Drink lots of fluids`,
                correct: true
            }, {
                ans: `Not drink, not eat`,
                correct: false
            }
        ],
        explanation: `Donors should maintain their usual food and fluid intake before donation but should avoid heavy or fatty meals which may result in lipaemic donation that may need to be discarded. An intake of 500ml of drinking water just before donation reduces risk of vasovagal reaction`,
        correctAns: null
    }, {
        category: `Antibiotic Resistance`,
        question: `Antibiotics are powerful medicines that help to fight`,
        answers: [{
                ans: `Viruses`,
                correct: false
            }, {
                ans: `Bacteria`,
                correct: true
            }, {
                ans: `All microbes`,
                correct: false
            }
        ],
        explanation: `Antibiotics are medicines that treat bacterial infections. They do not cure infections caused by viruses, such as the common cold or flu. Taking antibiotics when you do NOT need them can prevent them working when you DO need them`,
        correctAns: null
    }, {
        category: `Antibiotic Resistance`,
        question: `Antibiotic resistance happens when my body becomes resistant to antibiotics`,
        answers: [{
                ans: `True`,
                correct: false
            }, {
                ans: `False`,
                correct: true
            }
        ],
        explanation: `False. Antibiotics target bacteria, killing or weakening them and helping you to fight off infections. Your body does not develop resistance to antibiotics; it is the bacteria which becomes resistant to antibiotics through genetic changes`,
        correctAns: null
    }, {
        category: `Antibiotic Resistance`,
        question: `What can happen if I get an antibiotic resistant infection?`,
        answers: [{
                ans: `I may be sick longer`,
                correct: false
            }, {
                ans: `I may have to visit my doctor more to be treated in hospital`,
                correct: false
            }, {
                ans: `I may need more expensive medicine that may cause side effects`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            }
        ],
        explanation: `Antibiotic resistance is happening everywhere in the world, affecting people of all ages. It is one of the biggest threats to public health today.`,
        correctAns: null
    }, {
        category: `Antibiotic Resistance`,
        question: `I can help tackle antibiotic resistance if I`,
        answers: [{
                ans: `Share my antibiotics with my family when they are sick`,
                correct: false
            }, {
                ans: `Get antibiotics as soon as I feel sick – either directly from the pharmacy or a friend`,
                correct: false
            }, {
                ans: `Keep my vaccinations up to date`,
                correct: true
            }
        ],
        explanation: `Taking action to prevent infections, such as by getting vaccinated, will stop you from getting sick and reduce your need for antibiotics. Even small actions can make a difference, like washing your hands regularly to prevent the spread of the infection.`,
        correctAns: null
    }, {
        category: `Antibiotic Resistance`,
        question: `Antimicrobial resistance is the broader term for resistance in different types of microorganisms and encompasses resistance to antibacterial, antiviral, antiparasitic and antifungal drugs`,
        answers: [{
                ans: `True`,
                correct: true
            }, {
                ans: `False`,
                correct: false
            }
        ],
        explanation: `Antimicrobial resistance is resistance to drugs that treat infections caused by other microbes as well, such as parasites (e.g. malaria or helminths), viruses (e.g. HIV) and fungi (e.g. Candida)`,
        correctAns: null
    }, {
        category: `Climate Change`,
        question: `"Climate change has no linkage to Health". Is the statement True or False?`,
        answers: [{
                ans: `True`,
                correct: false
            }, {
                ans: `False`,
                correct: true
            }
        ],
        explanation: `This statement is False. Climate change affects the social and environmental determinants of health – clean air, safe drinking water, sufficient food and secure shelter.`,
        correctAns: null
    }, {
        category: `Climate Change`,
        question: `What are some of the health impacts of Climate Change?`,
        answers: [{
                ans: `Vector Borne Diseases`,
                correct: false
            }, {
                ans: `Water borne diseases`,
                correct: false
            }, {
                ans: `Infectious Diseases`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            }
        ],
        explanation: `Between 2030 and 2050, climate change is expected to cause approximately 250 000 additional deaths per year, from diseases such as malnutrition, malaria, diarrhoea and heat stress.`,
        correctAns: null
    }, {
        category: `Others`,
        question: `What should you always wear while cycling or riding a motorbike?`,
        answers: [{
                ans: `Sunglasses`,
                correct: false
            }, {
                ans: `Helmet`,
                correct: true
            }, {
                ans: `Reflective clothing`,
                correct: false
            }
        ],
        explanation: `Correct helmet use can lead to a 42% reduction in the risk of fatal injuries and a 69% reduction in the risk of head injuries`,
        correctAns: null
    }, {
        category: `Others`,
        question: `Why is use of mobile phones a problem while driving or crossing the road?`,
        answers: [{
                ans: `They stop you from talking to friends`,
                correct: false
            }, {
                ans: `They distract you from taking appropriate decisions and being vigilant`,
                correct: true
            }, {
                ans: `It is difficult to look at the screen of your phone while driving or walking`,
                correct: false
            }
        ],
        explanation: `Using a mobile device while driving or crossing the road means your attention is not 100% focused on the road traffic and your surroundings and this could lead to accidents.`,
        correctAns: null
    }, {
        category: `Others`,
        question: `What is the leading cause of disability worldwide?`,
        answers: [{
                ans: `Road traffic accidents`,
                correct: false
            }, {
                ans: `Obesity`,
                correct: false
            }, {
                ans: `Depression`,
                correct: true
            }
        ],
        explanation: `At least 350 million people live with depression, and it is the leading cause of disability worldwide. It affects not only the person with depression, but their loved ones too. Yet, many of us are in denial Depression remains hidden – not treated or talked about.`,
        correctAns: null
    }, {
        category: `Others`,
        question: `For how many months should a child be exclusively breast fed?`,
        answers: [{
                ans: `4 months`,
                correct: false
            }, {
                ans: `6 months`,
                correct: true
            }, {
                ans: `12 months`,
                correct: false
            }
        ],
        explanation: `WHO recommends mothers worldwide to exclusively breastfeed infants for the child's first six months to achieve optimal growth, development and health.`,
        correctAns: null
    }, {
        category: `Others`,
        question: `As soon as you know you are pregnant, seek antenatal care for…`,
        answers: [{
                ans: `Emotional support and advice`,
                correct: false
            }, {
                ans: `Medical Care`,
                correct: false
            }, {
                ans: `Relevant and timely pregnancy information`,
                correct: false
            }, {
                ans: `All of the above`,
                correct: true
            }
        ],
        explanation: `Antenatal care is the care women get from health professionals during pregnancy. It's sometimes called pregnancy care or maternity care. Antenatal care is offered by a midwife, or a doctor who specializes in pregnancy and birth (an obstetrician).`,
        correctAns: null
    }, {
        category: `Others`,
        question: `Neural tube birth defects can be prevented with regular and proper intake of`,
        answers: [{
                ans: `Folic acid`,
                correct: true
            }, {
                ans: `Water`,
                correct: false
            }, {
                ans: `Calcium supplements`,
                correct: false
            }
        ],
        explanation: `Heart defects, Neural Tube defects & Down Syndrome are most commonly seen birth defects in the Maldives. Many birth defects can be prevented by taking appropriate measures before and during pregnancy. Regular and proper intake of Folic Acid (400 mcg at least 4 weeks prior to & first three months during pregnancy) can prevent neural tube birth defects.`,
        correctAns: null
    }
];

// let numbers = Array.apply(null, {length:50}).map(Number.call, Number);

let indexes = [];

let i=0;
while (i<10) {
    let rNum = Math.floor(Math.random()*40);
    if(!indexes.includes(rNum)) {
        indexes.push(rNum);
        i++;
    }
}

// console.log(indexes);
// console.log(questions.length);

module.exports = [
    questions[indexes[0]],
    questions[indexes[1]],
    questions[indexes[2]],
    questions[indexes[3]],
    questions[indexes[4]],
    questions[indexes[5]],
    questions[indexes[6]],
    questions[indexes[7]],
    questions[indexes[8]],
    questions[indexes[9]]
];