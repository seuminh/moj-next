import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    birthCertificateNum: String,
    nationalityIDNum: String,
    passportNumber: String,
    otherNum: String,
    lastName: String,
    firstName: String,
    nationality: String,
    lastNameLatin: String,
    firstNameLatin: String,
    ethnicity: String,
    gender: String,
    birthDate: String,
    bloodType: String,
    physical: String,
    disabilityNum: String,
    familyStatus: String,
    birthPlace: {
      province: String,
      district: String,
      commune: String,
      village: String,
      other: String,
    },
    currentResidence: {
      province: String,
      district: String,
      commune: String,
      village: String,
      other: String,
      houseNum: String,
      streetNum: String,
    },
    contactInfo: {
      email: String,
      phoneNumber1: String,
      phoneNumber2: String,
      other: String,
    },
    motherInfo: {
      nationalityIDNum: String,
      fullName: String,
      fullNameLatin: String,
      birthDate: String,
      nationality: String,
      ethnicity: String,
      occupation: String,
      livingStatus: String,
      birthPlace: {
        province: String,
        district: String,
        commune: String,
        village: String,
        other: String,
      },
      phoneNumber: String,
    },
    fatherInfo: {
      nationalityIDNum: String,
      fullName: String,
      fullNameLatin: String,
      birthDate: String,
      nationalityIDNum: String,
      nationality: String,
      ethnicity: String,
      occupation: String,
      livingStatus: String,
      birthPlace: {
        province: String,
        district: String,
        commune: String,
        village: String,
        other: String,
      },
      phoneNumber: String,
    },
    partnerInfo: {
      weddingCertificateNum: String,
      nationalityIDNum: String,
      fullName: String,
      fullNameLatin: String,
      statusLive: String,
      occupation: String,
      birthDate: String,
      nationality: String,
      ethnicity: String,
      phoneNumber: String,
      workPlace: String,
      birthPlace: {
        province: String,
        district: String,
        commune: String,
        village: String,
        other: String,
      },
      currentResidence: {
        province: String,
        district: String,
        commune: String,
        village: String,
        other: String,
        houseNum: String,
        streetNum: String,
      },
    },
    children: [
      {
        birthCertificateNum: String,
        nationalityIDNum: String,
        fullName: String,
        fullNameLatin: String,
        birthDate: String,
        gender: String,
        occupation: String,
        livingStatus: String,
      },
    ],
    education: [
      {
        course: String,
        level: String,
        degreeType: String,
        institution: String,
        startYear: String,
        endYear: String,
        other: String,
        place: String,
      },
    ],
    experience: [{
      refNum: String,
      position: String,
      unit: String,
      startDate: String,
      endDate: String
    }]
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

UserSchema.post("save", function (error, doc, next) {
  if (error.code === 11000) {
    next(new Error("Email already being used"));
  } else {
    next(error);
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
