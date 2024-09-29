## Introduction

Abstract—Speech enhancement is a pre-processing step in most of the speech-based applications, the speech signal is sequential. Normal feedforward neural networks are not useful much as their architecture does not support utilizing past data while recurrent networks can use past information and they can predict future values. Recurrent Neural Network (RNN), Long Short-Term Memory [LSTM] network and Gated Recurrent Unit [GRU] networks are used to compare their performance. The training of this architecture is performed on TIMIT dataset and generalization of recurrent neural networks are observed with unknown input
speech. The evaluation of these architectures are performed with speech quality measurand PESQ and intelligibility is measured with STOI value. The evaluation result shows that the GRU model gives good improvement over the other two recurrent neural network models.

|                                                        ![rocket.jpg](/images/CVAE.png "CVAE")                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| _Speech Separation_ |

Speech separation is another way of speech enhancement, and it separates target speech from a noisy speech signal. It has employed a wide range of applications like speaker separation, automatic speech recognition, hearing aids, telecommunication. The human auditory system can separate one target signal from other multiple signals in an environment. These type of problems are called “cocktail-party problem”, this term introduced by E.C.Cherry. From
the last decade, onwards time-frequency (T-F) masking based Computational Auditory Scene Analysis (CASA) increases research in supervised speech separation.

Deep neural network-based uses learning algorithms for speech separation which extracts target speech signal from a noisy mixture (It is a part of CASA ), which is inspired by research on human auditory perception since Deep Neural Networks (DNNs) can understand and predict the non-linear representation of input data . It employs DNN to identify the non-linear patterns of speech in the noisy mixture and then use these patterns to predict the parts of speech and extract them. In a noisy mixture, the signal consists of a speech signal and noise, which are non-stationary. To improve the frequency resolution, the noisy signal represented in time domain is converted to time-frequency(T-F) domain using short-time Discrete Fourier transform where each T-F unit is a representation of an element at a particular time and frequency index.

The two standard computational masking methods in CASA are Ideal Binary Mask (IBM) and Ideal Ratio Mask (IRM). While these methods are widely used in speech separation tasks, IBM can be viewed as a simplified version of IRM because IBM reduces the separation task into a binary classification where IBM identifies a T-F unit of a noisy signal as source dominant or noise dominant. The signals recovered from IRM outperformed IBM when Intelligibility measured in
source separation. So to achieve better intelligibility, we use IRM as our training target for our neural network model. There are other masking methods used in CASA are elaborate Ideal Ratio Mask (cIRM), Phase Sensitive Mask(PSM), Optimal Ratio Mask (ORM), etc., all these masks are improving speech intelligibility . Among all these masks, IRM is a smoothed and straightforward implementable mask, so in this paper, we considered speech target as IRM.

Spectrograms are usually used to find the IRM, so feedforward neural networks are not suitable for image type (2-Dimensional) targets, so Convolutional neural networks are used for estimation of IRM. The variational inference model shows good generalization capability, so in this paper, we have used a Convolutional variational autoencoder for estimation of IRM, which gives better generalization compared with CNN and MMSE.

## Mask

1. IBM: The Ideal Binnary Msk (IBM) is used as first training target, this target is used in supervised speech separation for separation of target signal this phenomenon is inspired by the auditory masking phenomenon and the exclusive allocation principle in auditory scene analysis. The Cochleagram or spectrogram is used for IBM, it is a two-dimensional T-F representation of a noisy signal.
2. IRM: The IBM mask gives hard thresholding, and it does not give smooth output and resulting in a musical noise. The Ideal Ratio Mask (IRM) is used as a soft version of the IBM, which results in a soft output.

## Neural Networks for Speech Separation

Many supervised learning tasks are significantly improved its performance from the last decade by using DNN. Supervised speech separation also uses DNN for the calculation of the target mask, which improves the performance by a large margin. A variety of DNN architectures are existed such as Deep Belief Network (DBN), feedforward Multi Layer Perceptrons (MLPs), Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), and Generative Adversarial Networks (GANs). Database is prepared from clean and noise utterances, this dataset is used for training the model. The testing of the trained model is performed with an unknown noise.

A convolutional variational autoencoder consists of encoder and decoder structure, which are parameterized by convolutional and deconvolutional layers which is simple and computationally efficient for training compared to a normal variational autoencoder. A variational autoencoder is a probabilistic generative model that follows Bayes rule p(x; z) = p(x|z)∗p(z) where our target is randomly generated by a random process which involves random variables z. Variational Autoencoder (VAE) consists of encoder, decoder and loss function. The encoder q(z;x) encodes our input data into latent space variable z which follows Normal
distribution with parameters μ and σ given by the encoder

## Summary / Conclusion

There is a lot more to talk about in this project, but I decided to limit this article for the sake of readability. Here is a TLDR:

> The IRM mask gives a smooth reconstruction of the speech signal, and the proposed CVAE model has been compared with CNN and a conventional method, i.e., MMSE. Results are compared in terms of speech intelligibility STOI, from the obtained results it is observed that the CVAE model shows a large improvement compared with MMSE whereas when compared with CNN the results are a little bit less, but overall improvement shows generalization improvement of CVAE as compared with CNN.

Thank you for reading my article, hope you found it interesting, and perhaps learnt a thing or two.
