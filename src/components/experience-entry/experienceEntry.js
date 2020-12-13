import React from 'react';

const experience = [
    {
        organization: 'TESS Asia',
        date: 'Jun 2020 – Sept 2020',
        role: 'Software Engineer Intern',
        location: 'Hong Kong',
        points: [
            'Created a facial recognition program using a Resnet-50 based Siamese neural network with PyTorch.',
            'Used Flask to implement a web API to compare any two images that the user uploads.',
            'Built a facial verification and image editing API for training and testing data.',
            'Set up a cloud mail server from scratch using a MySQL, Apache, Postfix, and Dovecot framework.',
            'Migrated roughly 80 GB worth of company account configurations and user data from the old mail server to the new server.'
        ]
    },
    {
        organization: 'UCLA ACM Hack',
        date: 'Nov 2019 – Present',
        role: 'Officer',
        location: 'Los Angeles',
        points: [
            'Co-directed a quarter-long Tooling Workshop Series to beginners that covers topics such as Git, Shell Scripting, Regular Expressions, and LaTeX. (github.com/uclaacm/hack-tooling-series)',
            'Taught an Android development workshop with Kotlin to beginners as part of a quarter-long workshop series. Mentored students on any app development issues during weekly sessions. (github.com/uclaacm/hack-sprint-w20)',
        ]
    },
    {
        organization: 'Physics Department, The Chinese University of Hong Kong',
        date: 'Jul 2018 – Aug 2018',
        role: 'Research Intern',
        location: 'Hong Kong',
        points: [
            'Created a MATLAB program that tracks and records the movement of bacteria, outputting the results as structured data.',
            'Shortened the video analysis time from what would have taken 2 months to a few hours.',
        ]
    },
    {
        organization: 'Centre of Combustion Energy, Tsinghua University',
        date: 'Jul 2017 – Aug 2017',
        role: 'Research Intern',
        location: 'Beijing',
        points: [
            'Designed and implemented a MATLAB program that records the change in shape of individual ethanol droplets over time.'
        ]
    },
]

function ExperienceEntry({  }) {
    
}

function ExperienceSection( { } ) {

}

// TODO