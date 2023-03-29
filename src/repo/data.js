export const groupSavings = [
  {
    id: 1,
    img: require('../../assets/images/images.jpeg'),
    Decs: ' • Although most people with Parkinson’s first develop the disease after age 60, about 5% to 10% experience onset before the age of 50.',
  },
  {
    id: 2,
    img: require('../../assets/images/Parkinsons-Human-Body.webp'),
    Decs: ' • Patients may also have mental and behavioral changes, sleep problems, depression, memory difficulties, and fatigue.',
  },
  {
    id: 3,
    img: require('../../assets/images/NIA_Brain_Medical_Graphic_for_Parkinsons_Disease_102721_500px-02.png'),
    Decs: ' • Symptoms usually begin gradually and worsen over time. As the disease progresses, people may have difficulty walking and talking.',
  },
  {
    id: 4,
    img: require('../../assets/images/ET_Main-1.webp'),
    Decs: " • Parkinson's disease is a brain disorder that causes unintended or uncontrollable movements, such as shaking, stiffness, and difficulty with balance and coordination.",
  },
];

export const tabData = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Causes',
  },
  {
    id: 3,
    title: 'Symptoms',
  },
  {
    id: 4,
    title: 'Prevention',
  },
  {
    id: 5,
    title: 'Specialist',
  },
];

export const causesData = [
  {
    id: 1,
    bgImg: require('../../assets/images/921171.png'),
    title: 'Genes',
    Dec: "• Researchers have identified specific genetic changes that can cause Parkinson's disease. But these are uncommon except in rare cases with many family members affected by Parkinson's disease.",
  },
  {
    id: 2,
    bgImg: require('../../assets/images/eco-anxiety-01-main-720x400.jpg'),
    title: 'Environmental Triggers',
    Dec: "• Exposure to certain toxins or environmental factors may increase the risk of later Parkinson's disease, but the risk is small.",
  },
  {
    id: 3,
    bgImg: require('../../assets/images/dementia-types-lewy-bodies-teaserimage.jpg'),
    title: 'The presence of Lewy bodies',
    Dec: "• Clumps of specific substances within brain cells are microscopic markers of Parkinson's disease. ",
  },
  {
    id: 4,
    bgImg: require('../../assets/images/shutterstock_227273575.jpg'),
    title: 'Alpha-synuclein found within Lewy bodies',
    Dec: "• Although many substances are found within Lewy bodies, scientists believe an important one is the natural and widespread protein called alpha-synuclein (a-synuclein). It's found in all Lewy bodies in a clumped form that cells can't break down. ",
  },
];

export const symptomsData = [
  {
    id: 1,
    bgImg: require('../../assets/images/Tremor.webp'),
    title: 'Tremor',
    Dec: "• A tremor, or rhythmic shaking, usually begins in a limb, often your hand or fingers. You may rub your thumb and forefinger back and forth. This is known as a pill-rolling tremor.",
  },
  {
    id: 2,
    bgImg: require('../../assets/images/Plum_Blogbanners_Plum-What-is-Parkinsons.png'),
    title: 'Slowed movement (bradykinesia)',
    Dec: "• Over time, Parkinson's disease may slow your movement, making simple tasks difficult and time-consuming. Your steps may become shorter when you walk.",
  },
  {
    id: 3,
    bgImg: require('../../assets/images/rigid-muscle.png'),
    title: 'Rigid muscles',
    Dec: "• Muscle stiffness may occur in any part of your body. The stiff muscles can be painful and limit your range of motion.",
  },
  {
    id: 4,
    bgImg: require('../../assets/images/ImpairedPosture.jpeg'),
    title: 'Impaired posture and balance',
    Dec: "• Your posture may become stooped. Or you may fall or have balance problems as a result of Parkinson's disease.",
  },
];

export const preventionData = [
  {
    id: 1,
    bgImg: require('../../assets/images/VolentaryMovement.jpeg'),
    title: 'Voluntary movement',
    Dec: "• Voluntary movements are self-generated, willed actions performed as a result of cognitive processes.",
  },
  {
    id: 2,
    bgImg: require('../../assets/images/Cognition.png'),
    title: 'Cognition',
    Dec: "• Cognition is a term for the mental processes that take place in the brain, including thinking, attention, language, learning, memory and perception.",
  },
  {
    id: 3,
    bgImg: require('../../assets/images/memory.jpg'),
    title: 'Memory',
    Dec: "• Memory refers to the psychological processes of acquiring, storing, retaining, and later retrieving information.",
  },
  {
    id: 4,
    bgImg: require('../../assets/images/VitamineD.jpg'),
    title: 'Vitamin D3 Intake',
    Dec: "• Vitamin D3 is important for bone and muscle strength and immune function, and it may have other benefits such as helping prevent inflammatory disease.",
  },
];

export const specialistsData = [
  {
    id: 1,
    Dec: "        Parkinson's disease can't be cured, but your care team will work with you to help you manage your condition.",
  },
  {
    id: 2,
    Dec: "        Your health care provider will tailor your treatment to your individual needs.",
  },
  {
    id: 3,
    Dec: "        Your care team has expertise in treating Parkinson's disease and other movement disorders with the latest therapies, including medications and deep brain stimulation.",
  },
  {
    id: 4,
    Dec: "        Mayo Clinic's campuses in Arizona and Minnesota are home to early-onset Parkinson's clinics that offer specialized diagnosis and treatment for young adults with Parkinson's.",
  },
];

//const DATA = [
  //     {
  //         id: 1,
  //         Dec: "      Parkinson's disease can't be cured, but your care team will work with you to help you manage your condition.",
  //       },
  //       {
  //         id: 2,
  //         Dec: "      Your health care provider will tailor your treatment to your individual needs.",
  //       },
  //       {
  //         id: 3,
  //         Dec: "      Your care team has expertise in treating Parkinson's disease and other movement disorders with the latest therapies, including medications and deep brain stimulation.",
  //       },
  //       {
  //         id: 4,
  //         Dec: "      Mayo Clinic's campuses in Arizona and Minnesota are home to early-onset Parkinson's clinics that offer specialized diagnosis and treatment for young adults with Parkinson's.",
  //       },
  //   ];
    
  //   const Item = ({Dec}) => (
  //     <View style={styles.item}>
  //       <Text style={styles.Dec}>{Dec}</Text>
  //     </View>
  //   );
{/* <Space size={18} />
<ScrollView >
      <Text
        style={{
          fontSize: 20,
          paddingHorizontal: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Advanced Diagnosis And Treatment :
      </Text>
      {specialistsData.map((post, index) => (
                <View key={index} style={{
                    height: 222,
                    
                }}>
                    <View style={{
                        position: 'absolute',
                        //top: 1,
                        right: 1,
                        //bottom: 1,
                        left: 25,
                        height: '80%',
                        width: '85%',
                        borderWidth: BORDER_WIDTH,
                        borderColor: theme.border,
                        borderRadius: BORDER_RADIUS + 4,
                        overflow: 'hidden',
                        //padding: 3,
                    }}>
                         <View style={{
                        position: 'absolute',
                        bottom: 1,
                        left: 10,
                        right: 10,
                        top:60
                    }}>
                          
                        <Text style={{
                            fontSize: 20,
                            color: 'black',
                            //lineHeight: 15,
                            
                        }}>
                            {post.Dec}
                        </Text>  

                        
                    </View>
                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        left: 40,
                        borderWidth: BORDER_WIDTH,
                        borderColor: theme.border,
                        borderRadius: BORDER_RADIUS,
                        justifyContent: 'center',
                        paddingHorizontal: 14,
                        paddingVertical: 6,
                        backgroundColor: '#ffe252',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                        <Text style={{
                            fontSize: 13,
                            fontWeight: '500',
                        }}>{post.id}</Text>

                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        right: 22,
                        justifyContent: 'center',
                        paddingVertical: 6,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        
                    </View>

                    <LinearGradient colors={gradientColors} style={styles.gradientLayer} />

                    <View style={{
                        position: 'absolute',
                        bottom: 22,
                        left: 22,
                        right: 22,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#fff'
                        }}>
                            
                        </Text>
                        <Space size={6} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#fff',
                            lineHeight: 18,
                        }}>
                        </Text>
                    </View>
                </View>
            ))}
            </ScrollView> */}


