// Type definitions for ClassifierBuiltins
// Definitions: 

/**
The classifier built-in functions perform automatic classification of
documents using training data. The classifiers that result from
training are represented in XML. The classifier APIs and the XML output
from cts:train conform to the
classifier.xsd schema, located in the Config directory
under the directory in which MarkLogic Server is installed.

**/

declare module ClassifierBuiltins {

  interface cts {

    /** Produces a set of classifiers from a list of labeled training documents. **/
    train(trainingNodes: Object, labels: Object, options?: Object): Object;

    /** Classifies a sequence an array of nodes based on training data. The training data is in the form of a classifier specification, which is generated from the output of cts:train. cts.train. Returns labels for each of the input documents in the same order as the input document. **/
    classify(dataNodes: Object, classifier: Object, options?: Object, trainingNodes?: Object): Object;

    /** Compute precision, recall, the F measure, and thresholds for the classes computed by the classifier, by comparing with the labels for the same set. **/
    thresholds(computedLabels: Object, knownLabels: Object, recallWeight?: Object): Object;


  }
}
