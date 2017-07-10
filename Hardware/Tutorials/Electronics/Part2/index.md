---
title: Part 2 - Quantifying Electriciy; Amps, Volts, and Watts
---

In part 1 of our electronics primer we got an understanding of the physical nature of electricity. In this part, we're going to start to look at some of the practical aspects that arise from the atomic behavior of electricity.

## Electromagnetism [move to phsyics, part 1]

<!--[field alignment comes from orbital motion AND spin of electrons]-->


[spin - another arbitrary naming for an intrinsic characteristic of subatomic particles. this is where the electromagnetic force comes from, along with the orbital motion of electrons]



[electrons are bound to the nucleus of the atom in orbits because of their attraction to positively charged protons. electromagnetic force]

[moving electrons; e.g. and electric current can extend this force at a distance]

[a wire in a coil, has a particuarly strong magnetic force. in fact, we can build an electromagnet very easily. Simply coil an insulated wire around a nail and run a charge through it:]

[illustration of an electromagnet with a battery and a nail]

### Induction

[magnetic field can _induce_ a current in a wire without touching it]
[can change the nature of a current with two coils]

[illustration of one coil inducting another to power an LED]

[we'll see later that this is important for a lot of stuff]

[a lot of electronic circuits use induction, and accidental induction is something that we need to concern ourselves in circuit design]

[Further reading on Magnetism](http://www.rpi.edu/dept/phys/ScIT/InformationStorage/faraday/magnetism_a.html)


## Measuring Electricity's Ability to do Work; Amount and Force

Electricity is useful because of its ability to do work. We can heat with electricity, generate light, and use the magnetic force of electricity to turn electric motors that propel our cars, vacuum our houses, and mix our smoothies.

In order to describe the amount of work that electricity can do, we use two characteristics:

 * **Amperage** - Measured in amps, this is the quantity of electrons that are being moved.
 * **Voltage** - Measured in volts, this is the amount of force in which those electrons are being moved.

Water is used as a common analogy to relate these characteristics. Imagine a water tower full of water, and a pipe extending down to the ground below it:

![](../Water_Tower_Battery.svg)

In this analogy, we can think of the water tower as a battery. 

Now imagine, at the bottom of the pipe is a valve that can release water and a water wheel that spins when water flows over it.

![](../Water_Tower_w_Wheel.svg)

The water tower has a quantity of water in it, and the gravity pulling from the water down to the ground, generates a force to move that water. When water is flowing over our water wheel, the molecules of water (analogous to our charge carriers) are causing the water wheel to move, and gravity acting on the difference in height from the top of the water to the bottom of the water to generate a force to push those water molecues and do work.

In order for electricity to be useful, we must have both a quantity of charge carriers (amps), and force to move them (volts). Imagine a water tower full of water, but the pipe outflow is the same height as the top of the water stored in the tank:

![](../Water_in_Equilibrium.svg)


Even though charge carriers exist, there is no different in height to create a potential, or force to move them.

Similarly, even with a very tall, but empty tower, if there are no charge carriers to move, there can be no work done, even though gravity could be acting over a large height difference.

This system, taken as a whole, is analgous to something like a cordless electric drill, in which the battery is our water tower, and the electric motor is the water wheel, and the trigger is the valve that let's water flow:

[illustration of electric drill]


### Amperage (Amperes/Amps/A)

One of the simplest (though not actually the official) definitions of an [ampere (amp)](https://en.wikipedia.org/wiki/Ampere) is 1 [_coulomb_](https://en.wikipedia.org/wiki/Coulomb) of charge carriers passing through a given location per second. 

One coulomb is equal to 6.242 x10^18 (6,242,000,000,000,000,000,000) charge carriers. A fantastically large number, but given the relative size of electrons, one can imagine that number of charges moving on a relatively modest wire. Consider household wiring, which is typically 14 or 12 gauge, and rated at carrying 10 or 15 amps (at 120 volts), respectively.

To get an idea of the amount of work that can be done with that number of electrons, consider the following household appliances and their amperage:

| Appliance                       | Amperage |
|---------------------------------|--------------|
| 60 Watt incandescent light bulb | 500mA (0.5A) |
| 10 Watt LED (60 Watt incandescent equivalent) | ~100mA (0.1A) |
| Hair Dryer | 15 amps |

When describing the quantity of charge either available, or used, amp hours (Ah), are used. An amp hour is an hour's worth of amps, or 3600 coulombs (since there are 3600 seconds in an hour).

In our water tower analogy, the quantity of water flowing over our water wheel at any given second is measured in Amps, and the quantity of water stored in the water tower (battery), is described in amp hours.

[illustration of water tower with labels of Remaining Charge, measured in Ah, amount of current flowing, measured in A, and force of water, measured in V]

Amp hours are often expressed in milliampere hours (mAh), which is one-thousandth of an amp hour, or 3.6 coulombs. For reference, a typical AA NiMH rechargeable battery will have ~2500 mAh (2.5Ah), and a D NiMH rechargeable has ~10,000 mAh (10 Ah).

### Electromotive Force (EMF) and Voltage

In order for a current to exist, charge carriers must be motivated to move.

Returning to our water tower analogy, gravity acting on the difference in height of the top water to the bottom, generates a potential force that can be exploited to move water and turn the water wheel.

[The amount of potential force or pressure]




[dependent on how the electricity is stored or generated]


[illustration of a water tank full of water, suspended above the ground]


[EMF exists whether or not there is water in the tank, because the height differential exists. The moment you add a water molecule, it will have ]

[which is why it's sometimes called potential]

[voltage is measured when the water is flowing]



Force is relative. [water towers at different altitudes]


## Converting between Amps and Volts

[through induction]

[pipe analogy]


## Wattage

Because in order to properly describe the amount of work that electrical current can do you need to use both Amperage and Voltage, we have a convenience unit called a [Watt](https://en.wikipedia.org/wiki/Watt) that can be described as follows:

```
Watts = Volts * Current
```




100 watts = 120 volts * x Amps

5/6 amp = 100 watts @ 120 volts

iPad Charger = 2 amps @ 5v (10 Watts)
Netduino @ 5volts = 125 milliamps (maximum), 30-40ma (normal)



Most of the voltages we'll work with will be 5v or 3.3v for DC, or 120v/240v for AC


# [Part 3 - Resistance and Ohm's Law](../Part3/) 

<br/>








